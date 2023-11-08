import { Item } from './styles';

type ItemType = {
    title: string;
    icon: React.ReactComponentElement<any>;
    selected: string;
    color?: string;
    activecolor?: string;
    bgcolor: string;
    path: string;
    collapsed: boolean;
    // eslint-disable-next-line no-unused-vars
    navigate: (link: string) => void;
};

export const MenuItem = ({ title, icon, selected, path, color, activecolor, collapsed, bgcolor, navigate }: ItemType) => {
    return (
        <Item
            className={selected === path ? 'active' : ''}
            color={color}
            activecolor={activecolor}
            bgcolor={bgcolor}
            collapsed={collapsed}
            onClick={() => navigate(path)}
        >
            <a>
                <span className="icon">{icon}</span>
                <span className="title">{title}</span>
            </a>
            <span className="tooltip">{title}</span>
        </Item>
    );
};
