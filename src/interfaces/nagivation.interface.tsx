export interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: { title: string; endpoint: string };
  prefetch?: boolean;
}

export interface TopNavItem {
  title: string;
  stateName: string;
  endpoint: string;
  submenu: SubNavItem[];
}

export interface TopNavProps {
  topmenu: TopNavItem[];
}

export interface TopNavState {
  [key: string]: boolean;
}

export interface SubNavItem {
  title: string;
  stateName: string;
  endpoint: string;
}

export interface SubNavProps {
  submenu: SubNavItem[];
}

export interface DropdownStatus {
  [key: string]: boolean;
}

export interface OfferingListUpdate {
  [key: string]: string | number;
}

export interface OfferingListPlayer extends OfferingListUpdate {
  profilepic: string;
  player: string;
  tourneyname: string;
  tourneylocation: string;
  buyin: number;
  markup: number;
  available: number;
  start: string;
}
