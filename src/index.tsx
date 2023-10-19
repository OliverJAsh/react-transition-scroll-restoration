import { createRoot } from 'react-dom/client';
import { Link } from './Link';
import { Provider } from './ReactHistory';
import { useURL } from './useURL';

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

const Content = () => {
    const url = useURL();
    switch (url.pathname) {
        case '/':
            return (
                <div style={{ height: '400vh', background: 'yellow' }}>
                    <div>Home</div>
                    <Link href={'/other'}>Other page</Link>
                    <Expensive />
                </div>
            );
        case '/other':
            return (
                <div style={{ height: '400vh', background: 'green' }}>
                    <div>Other page</div>
                    <Link href="/">Home</Link>
                    <Expensive />
                </div>
            );
        default:
            return null;
    }
};

const App = () => {
    return (
        <Provider>
            <Content />
        </Provider>
    );
};

createRoot(document.getElementById('root')!).render(<App />);
