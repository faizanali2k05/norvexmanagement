import { useEffect, useState } from 'react';
import { LogOut, Lock, RefreshCw } from 'lucide-react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

type ContactQuery = {
  id: string;
  name: string;
  email: string;
  query: string;
  created_at: string;
};

type ProjectRequest = {
  id: string;
  name: string;
  email: string;
  service: string;
  created_at: string;
};

type JobApplication = {
  id: string;
  name: string;
  email: string;
  service: string;
  created_at: string;
};

type TabKey = 'orders' | 'queries' | 'applications';

const inputClass =
  'w-full bg-ivory border border-light-gray/60 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-charcoal';

function formatDate(iso: string) {
  return new Date(iso).toLocaleString();
}

function LoginForm({ onLoggedIn }: { onLoggedIn: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    onLoggedIn();
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-2xl p-8 border border-gray-200 shadow-card w-full max-w-sm space-y-5"
      >
        <div className="flex flex-col items-center mb-2">
          <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-3">
            <Lock className="h-5 w-5 text-gold" />
          </div>
          <h1 className="font-display font-semibold text-navy text-xl">Admin Login</h1>
        </div>
        <div>
          <label htmlFor="admin-email" className="block text-sm font-semibold text-navy mb-2">
            Email
          </label>
          <input
            id="admin-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="admin-password" className="block text-sm font-semibold text-navy mb-2">
            Password
          </label>
          <input
            id="admin-password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3 disabled:opacity-60">
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}

export default function Admin() {
  const [session, setSession] = useState<Session | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const [tab, setTab] = useState<TabKey>('orders');

  const [orders, setOrders] = useState<ProjectRequest[]>([]);
  const [queries, setQueries] = useState<ContactQuery[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setCheckingSession(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const loadData = async () => {
    setLoadingData(true);

    const [ordersRes, queriesRes, applicationsRes] = await Promise.all([
      supabase.from('project_requests').select('*').order('created_at', { ascending: false }),
      supabase.from('contact_queries').select('*').order('created_at', { ascending: false }),
      supabase.from('job_applications').select('*').order('created_at', { ascending: false }),
    ]);

    if (ordersRes.data) setOrders(ordersRes.data as ProjectRequest[]);
    if (queriesRes.data) setQueries(queriesRes.data as ContactQuery[]);
    if (applicationsRes.data) setApplications(applicationsRes.data as JobApplication[]);

    setLoadingData(false);
  };

  useEffect(() => {
    if (session) loadData();
  }, [session]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (checkingSession) {
    return <div className="min-h-[60vh]" />;
  }

  if (!session) {
    return <LoginForm onLoggedIn={loadData} />;
  }

  const tabs: { key: TabKey; label: string; count: number }[] = [
    { key: 'orders', label: 'Project Requests', count: orders.length },
    { key: 'queries', label: 'Contact Queries', count: queries.length },
    { key: 'applications', label: 'Job Applications', count: applications.length },
  ];

  return (
    <div className="page-enter section-padding">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h1 className="font-display font-semibold text-navy text-3xl">Submissions</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              className="flex items-center gap-2 text-sm font-semibold text-navy border border-gray-200 rounded-xl px-4 py-2 hover:bg-ivory transition-colors"
            >
              <RefreshCw className={`h-4 w-4 ${loadingData ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm font-semibold text-navy border border-gray-200 rounded-xl px-4 py-2 hover:bg-ivory transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Log Out
            </button>
          </div>
        </div>

        <div className="flex gap-2 border-b border-gray-200 mb-6 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-4 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                tab === t.key ? 'border-gold text-navy' : 'border-transparent text-medium-gray hover:text-navy'
              }`}
            >
              {t.label} ({t.count})
            </button>
          ))}
        </div>

        {tab === 'orders' && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-medium-gray uppercase text-xs tracking-wider border-b border-gray-200">
                  <th className="py-3 pr-4">Name</th>
                  <th className="py-3 pr-4">Email</th>
                  <th className="py-3 pr-4">Service</th>
                  <th className="py-3 pr-4">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-semibold text-navy">{o.name}</td>
                    <td className="py-3 pr-4">{o.email}</td>
                    <td className="py-3 pr-4">{o.service}</td>
                    <td className="py-3 pr-4 text-medium-gray">{formatDate(o.created_at)}</td>
                  </tr>
                ))}
                {orders.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-6 text-center text-medium-gray">
                      No project requests yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {tab === 'queries' && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-medium-gray uppercase text-xs tracking-wider border-b border-gray-200">
                  <th className="py-3 pr-4">Name</th>
                  <th className="py-3 pr-4">Email</th>
                  <th className="py-3 pr-4">Query</th>
                  <th className="py-3 pr-4">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {queries.map((q) => (
                  <tr key={q.id} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-semibold text-navy">{q.name}</td>
                    <td className="py-3 pr-4">{q.email}</td>
                    <td className="py-3 pr-4 max-w-md">{q.query}</td>
                    <td className="py-3 pr-4 text-medium-gray">{formatDate(q.created_at)}</td>
                  </tr>
                ))}
                {queries.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-6 text-center text-medium-gray">
                      No queries yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {tab === 'applications' && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-medium-gray uppercase text-xs tracking-wider border-b border-gray-200">
                  <th className="py-3 pr-4">Name</th>
                  <th className="py-3 pr-4">Email</th>
                  <th className="py-3 pr-4">Service</th>
                  <th className="py-3 pr-4">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((a) => (
                  <tr key={a.id} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-semibold text-navy">{a.name}</td>
                    <td className="py-3 pr-4">{a.email}</td>
                    <td className="py-3 pr-4">{a.service}</td>
                    <td className="py-3 pr-4 text-medium-gray">{formatDate(a.created_at)}</td>
                  </tr>
                ))}
                {applications.length === 0 && (
                  <tr>
                    <td colSpan={4} className="py-6 text-center text-medium-gray">
                      No applications yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
