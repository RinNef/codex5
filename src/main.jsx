const { useEffect, useMemo, useState } = React;
const Icon = ({ children, size = 22 }) => <span className="svg-icon" style={{fontSize: size}}>{children}</span>;
const ChevronLeft = () => <Icon>‹</Icon>;
const ChevronRight = () => <Icon>›</Icon>;
const Download = () => <Icon>↓</Icon>;
const Facebook = () => <Icon>f</Icon>;
const Gift = () => <Icon>🎁</Icon>;
const Menu = () => <Icon>☰</Icon>;
const Play = ({ size }) => <Icon size={size}>▶</Icon>;
const ShoppingBag = () => <Icon>🛍</Icon>;
const X = () => <Icon>×</Icon>;

const navItems = [
  ['home', 'Trang chủ'],
  ['features', 'Tính Năng Mới'],
  ['news', 'Tin tức'],
  ['classes', 'Môn Phái'],
  ['rank', 'Phong Vân Bảng'],
];

const news = [
  { title: 'TRANG SỰ KIỆN CHIÊU MỘ TIỂU NHA NHẬN HOA HỒNG HẤP DẪN', category: 'Sự kiện', date: '07/05', hot: true },
  { title: 'HÉ LỘ NGOẠI TRANG MỚI!!! ẢO THÀNH TRÊN BIỂN - KIM SA DỰNG MỘNG THÀNH', category: 'Tin Tức', date: '06/05' },
  { title: 'Thông Báo Cập Nhật Phiên Bản 1.2.2 Nghịch Thủy Hàn', category: 'Tin Tức', date: '05/05' },
  { title: 'DANH SÁCH ĐẠT GIẢI & TRÚNG THƯỞNG SỰ KIỆN “HOW I MET” TRI KỶ CỦA TUI', category: 'Thông Báo', date: '04/05' },
  { title: 'PHÂN TÍCH CHI TIẾT HỆ THỐNG NỘI CÔNG NGHỊCH THỦY HÀN', category: 'Tân Thủ', date: '03/05' },
];

const features = [
  { name: 'Ocean Serenade', text: 'Bản đồ biển xanh, thành phố cát vàng và chuỗi nhiệm vụ phiêu lưu cinematic.', tone: 'teal' },
  { name: 'Palmshade Valley', text: 'Thung lũng rợp bóng cọ, thời tiết động và sinh hoạt giang hồ tự do.', tone: 'green' },
  { name: 'Rising Lotus', text: 'Liên hoa nổi trên mặt nước, chiến đấu trên không và khám phá bí cảnh.', tone: 'pink' },
  { name: 'Azure Melody', text: 'Giai điệu thanh lam, trình diễn võ học và tương tác cộng đồng.', tone: 'blue' },
  { name: 'Tideborn Dreams', text: 'Giấc mộng thủy triều, phụ bản đội nhóm và boss trường cảnh.', tone: 'violet' },
];

const classes = [
  { name: 'Long Ngâm', role: 'Kiếm khí cân bằng', desc: 'Lối đánh nhịp nhàng, chuyển đổi công thủ linh hoạt giữa chiến trường.' },
  { name: 'Toái Mộng', role: 'Sát thủ cận chiến', desc: 'Bùng nổ sát thương, ẩn hiện như bóng đêm và kết liễu trong khoảnh khắc.' },
  { name: 'Cửu Linh', role: 'Triệu hồi linh hồn', desc: 'Điều khiển linh thú, khống chế diện rộng và gây áp lực liên tục.' },
  { name: 'Tố Vấn', role: 'Hỗ trợ trị liệu', desc: 'Âm luật chữa lành, bảo hộ đồng đội và tạo thế trận bền bỉ.' },
  { name: 'Thần Tương', role: 'Pháp công tầm xa', desc: 'Dùng đàn dẫn sấm, gây sát thương từ xa với tiết tấu tao nhã.' },
  { name: 'Huyết Hà', role: 'Thương pháp xung phong', desc: 'Cưỡi ngựa phá trận, mở giao tranh mạnh mẽ và áp sát không khoan nhượng.' },
  { name: 'Thiết Y', role: 'Đỡ đòn tiền tuyến', desc: 'Thiết quyền vững chãi, gánh chịu sát thương và bảo vệ đội hình.' },
];

const rankModes = ['BXH Nhàn Rỗi', 'Phó Bản', 'Luận Võ Công Bằng', 'Thí kiếm Thiên Hạ', 'Trục Lộc Tiên Nguyên'];
const servers = ['Ocean Serenade', 'Palmshade Valley', 'Rising Lotus', 'Azure Melody', 'Tideborn Dreams'];

function App() {
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState('age');
  const [activeNews, setActiveNews] = useState('Mới nhất');
  const [feature, setFeature] = useState(0);
  const [activeClass, setActiveClass] = useState(0);
  const [rankMode, setRankMode] = useState(0);
  const [server, setServer] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setFeature((value) => (value + 1) % features.length), 5200);
    return () => clearInterval(timer);
  }, []);

  const filteredNews = useMemo(() => {
    if (activeNews === 'Mới nhất') return news;
    return news.filter((item) => item.category === activeNews);
  }, [activeNews]);

  const ranks = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    player: index < 3 ? 'Lam Hồ' : ['Bạch Lộ', 'Thanh Vân', 'Mặc Ảnh', 'Tiểu Hàn'][index % 4],
    className: classes[index % classes.length].name,
    guild: index < 2 ? 'Phượng Vũ Cửu Thiên' : ['Thiên Nhai', 'Hoa Mộng', 'Vân Thủy Các'][index % 3],
    rank: index < 3 ? 'Cái Thế Tuyệt Luân' : ['Tông Sư', 'Đại Hiệp', 'Danh Chấn Giang Hồ'][index % 3],
    score: 892 - index * 17 + server * 9 + rankMode * 4,
  }));

  return <>
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Nghịch Thủy Hàn"><span className="brand-mark">逆</span><span>Nghịch Thủy Hàn</span></a>
      <nav className={menu ? 'nav open' : 'nav'}>{navItems.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>)}<a href="https://support.vnggames.com" target="_blank">Hỗ Trợ</a><a href="https://www.swordofjustice.com" target="_blank">Trạm Tạo Hình</a></nav>
      <button className="icon-btn mobile" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
    </header>

    <aside className="quickbar">
      <button onClick={() => setModal('download')}><Download/> Tải game</button>
      <a href="https://shop.vnggames.com" target="_blank"><ShoppingBag/> Webshop</a>
      <a href="https://event-vn.vnggames.com" target="_blank"><Gift/> Sự kiện</a>
      <a href="https://www.facebook.com" target="_blank"><Facebook/> Cộng đồng</a>
    </aside>

    <main>
      <section id="home" className="hero section">
        <div className="ink ink-a"/><div className="ink ink-b"/>
        <div className="hero-content reveal">
          <p className="eyebrow">AAA MMO Open World</p>
          <h1>Tuyệt Đối Điện Ảnh</h1>
          <p className="hero-copy">Bước vào giang hồ mở rộng, nơi võ hiệp phương Đông hòa cùng đồ họa điện ảnh, thời tiết động và tự do lựa chọn số phận.</p>
          <div className="hero-actions"><button className="primary" onClick={() => setModal('download')}>Tải game ngay</button><button className="ghost" onClick={() => setModal('trailer')}><Play/> Xem trailer</button></div>
        </div>
        <div className="hero-card reveal delay"><span>05.11</span><b>Ra mắt đa nền tảng Mobile & PC</b><small>App Store · Google Play · PC Client</small></div>
        <div className="scroll-hint">Cuộn để khám phá</div>
      </section>

      <section id="features" className="section feature-section">
        <SectionTitle over="Tính năng mới" title="Thế giới giang hồ sống động" />
        <div className="feature-wrap">
          <button className="arrow" onClick={() => setFeature((feature + features.length - 1) % features.length)}><ChevronLeft/></button>
          <article className={`feature-card ${features[feature].tone}`}>
            <div className="feature-art"><div className="moon"/><div className="mountains"/></div>
            <div><p className="eyebrow">{String(feature + 1).padStart(2, '0')} / {features.length}</p><h3>{features[feature].name}</h3><p>{features[feature].text}</p></div>
          </article>
          <button className="arrow" onClick={() => setFeature((feature + 1) % features.length)}><ChevronRight/></button>
        </div>
        <div className="dots">{features.map((item, i) => <button key={item.name} className={i === feature ? 'active' : ''} onClick={() => setFeature(i)}>{item.name}</button>)}</div>
      </section>

      <section id="news" className="section news-section">
        <SectionTitle over="Tin tức" title="Cập nhật mới nhất" />
        <div className="tabs">{['Mới nhất', 'Tin Tức', 'Sự kiện', 'Thông Báo', 'Tân Thủ'].map(tab => <button key={tab} className={activeNews === tab ? 'active' : ''} onClick={() => setActiveNews(tab)}>{tab}</button>)}</div>
        <div className="news-list">{filteredNews.map(item => <a className="news-item" href="https://nghichthuyhan.vnggames.com/tin-tuc" target="_blank" key={item.title}><time>{item.date}</time><span>{item.category}</span><b>{item.title}</b>{item.hot && <em>HOT</em>}</a>)}</div>
      </section>

      <section id="classes" className="section class-section">
        <SectionTitle over="Môn phái" title="Chọn phong cách chiến đấu" />
        <div className="class-stage">
          <div className="class-portrait"><div className="sword"/><div className="aura"/><strong>{classes[activeClass].name}</strong></div>
          <div className="class-info"><h3>{classes[activeClass].name}</h3><p className="role">{classes[activeClass].role}</p><p>{classes[activeClass].desc}</p><div className="class-buttons">{classes.map((item, index) => <button key={item.name} className={index === activeClass ? 'active' : ''} onClick={() => setActiveClass(index)}>{item.name}</button>)}</div></div>
        </div>
      </section>

      <section id="rank" className="section rank-section">
        <SectionTitle over="Phong Vân Bảng" title="Bảng xếp hạng cao thủ" />
        <div className="rank-controls"><select value={rankMode} onChange={e => setRankMode(Number(e.target.value))}>{rankModes.map((item, i) => <option key={item} value={i}>{item}</option>)}</select><select value={server} onChange={e => setServer(Number(e.target.value))}>{servers.map((item, i) => <option key={item} value={i}>{item}</option>)}</select></div>
        <div className="rank-table"><div className="rank-head"><span>#</span><span>Người chơi</span><span>Phái</span><span>Bang hội</span><span>Rank</span><span>Điểm</span></div>{ranks.map(row => <div className="rank-row" key={row.id}><span>{row.id}</span><span>{row.player}</span><span>{row.className}</span><span>{row.guild}</span><span>{row.rank}</span><b>{row.score}</b></div>)}</div>
      </section>
    </main>

    <footer><div className="footer-logo">VNGGames × NetEase</div><p>Công ty Cổ phần Tập đoàn VNG. Z06 Đường số 13, Phường Tân Thuận, Thành phố Hồ Chí Minh, Việt Nam. Hotline: 1900 561 558</p><p>Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số 140/GP-PTTH&TTĐT cấp ngày 24/03/2026. Quyết định phát hành số 111/QĐ-PTTH&TTĐT cấp ngày 05/03/2026.</p></footer>

    {modal && <Modal type={modal} onClose={() => setModal(null)} />}
  </>;
}

function SectionTitle({ over, title }) { return <div className="section-title"><p>{over}</p><h2>{title}</h2></div>; }

function Modal({ type, onClose }) {
  if (type === 'age') return <div className="modal"><div className="modal-box age"><h2>Thông báo độ tuổi</h2><p>Trò chơi dành cho người chơi từ 18 tuổi trở lên. Vui lòng quản lý thời gian trải nghiệm hợp lý.</p><button className="primary" onClick={onClose}>Tôi đã hiểu</button></div></div>;
  return <div className="modal"><div className="modal-box"><button className="close" onClick={onClose}><X/></button>{type === 'trailer' ? <><h2>Trailer điện ảnh</h2><div className="video-fake"><Play size={54}/><span>Khung phát video mô phỏng</span></div></> : <><h2>Tải game ngay</h2><div className="download-grid"><div className="qr">QR</div><div><button>App Store</button><button>Google Play</button><button>PC Client</button></div></div><p>Chơi được trên đa nền tảng Mobile & PC.</p></>}</div></div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
