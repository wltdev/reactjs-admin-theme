import { Item } from './styles';

type ItemType = {
    title: string;
    icon: React.ReactComponentElement<any>;
    selected: string;
    color?: string;
    activeColor?: string;
    path: string;
    // eslint-disable-next-line no-unused-vars
    navigate: (link: string) => void;
};

export const MenuItem = ({ title, icon, selected, path, color, activeColor, navigate }: ItemType) => {
    return (
        <Item className={selected === path ? 'active' : ''} color={color} activeColor={activeColor}>
            <a onClick={() => navigate(path)}>
                <span className="icon">{icon}</span>
                <span className="title">{title}</span>
            </a>
            {/* <span className="tooltip">{title}</span> */}
        </Item>
    );
};
