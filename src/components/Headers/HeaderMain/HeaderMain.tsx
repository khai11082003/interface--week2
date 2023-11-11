import "./styles.scss";
import IconSVG from "../../Icons/IconSVG";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { type } from "os";
import AccountName from "../AccountName";
import { Link } from "react-router-dom";
type MenuProps = {
  label: React.ReactNode;
  key: string;
};
type FItemType = {
  label: React.ReactNode;
  key: string;
};
const items: MenuProps[] = [
  {
    label: <Link to = "/" className="link">Ethreum</Link>,
    key: '0',
  },
  {
    label: <Link to = "/1" className="link">Bitcoint</Link>,
    key: '1',
  },
  {
    label: <Link to = "/2" className="link">BNB</Link>,
    key: '3',
  },
  {
    label: <Link to = "/3" className="link">page4</Link>,
    key: '4',
  },
  {
    label: <Link to = "/4" className="link">page5</Link>,
    key: '4',
  },
  {
    label: <Link to = "/5" className="link">page6</Link>,
    key: '4',
  },
  {
    label: <Link to = "/6" className="link">page7</Link>,
    key: '4',
  }
];

const HeaderMain = () => { 
  const fitem: FItemType = {...items[0]};
  const label = fitem.label;
  return (
    <header>
      <div className="logo--container">
        <IconSVG iconName="header-main" />
      </div>
      <div className="button--container">
        <div className="button--one">Account</div>
        <div className="button--two">{ 
        <Dropdown menu={{ items }} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
      <Space>
        {label  }
        <DownOutlined />
      </Space>
        </a>
      </Dropdown>}</div>
      </div>
    </header>
  );
};

export default HeaderMain;
