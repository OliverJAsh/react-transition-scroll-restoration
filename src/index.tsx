import { createRoot } from 'react-dom/client';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';

const MiniExpensive: React.FC = () => {
    const start = Date.now();
    while (Date.now() < start + 5) {}

    return null;
};

const Expensive: React.FC = () => {
    return Array.from({ length: 50 }).map((x, i) => {
        return <MiniExpensive key={i} />;
    });
};

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <div style={{ height: '400vh', background: 'yellow' }}>
                <div>Home</div>
                <Link to={'/other'}>Other page</Link>
                <Expensive />
            </div>
        ),
    },
    {
        path: '/other',
        element: (
            <div style={{ height: '400vh', background: 'green' }}>
                <div>Other page</div>
                <Link to="/">Home</Link>
                <Expensive />
            </div>
        ),
    },
]);

const App = () => {
    return (
        <RouterProvider router={router} future={{ v7_startTransition: true }} />
    );
};

createRoot(document.getElementById('root')!).render(<App />);
