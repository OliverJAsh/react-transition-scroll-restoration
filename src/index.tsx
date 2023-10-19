import { createRoot } from 'react-dom/client';
import { Link } from './Link';
import { Provider } from './ReactHistory';
import { useURL } from './useURL';

const Nav: React.FC = () => (
    <nav>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href={'/other'}>Other page</Link>
            </li>
        </ul>
    </nav>
);

const Content = () => {
    const url = useURL();
    switch (url.pathname) {
        case '/':
            return <div>home</div>;
        case '/other':
            return <div>other</div>;
        default:
            return null;
    }
};

const App = () => {
    return (
        <Provider>
            <Nav />
            <Content />
        </Provider>
    );
};

createRoot(document.getElementById('root')!).render(<App />);
