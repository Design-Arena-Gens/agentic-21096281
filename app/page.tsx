'use client';

import { useState } from 'react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  requirements: string[];
  postedDate: string;
  category: string;
}

const initialJobs: Job[] = [
  {
    id: 1,
    title: 'مهندس برمجيات',
    company: 'Tech Portugal',
    location: 'لشبونة',
    salary: '€2500-3500',
    type: 'دوام كامل',
    description: 'نبحث عن مهندس برمجيات ذو خبرة للانضمام إلى فريقنا في لشبونة. فرصة رائعة للعمل مع أحدث التقنيات.',
    requirements: ['خبرة 3+ سنوات', 'JavaScript/TypeScript', 'React أو Vue'],
    postedDate: '2024-01-15',
    category: 'تقنية'
  },
  {
    id: 2,
    title: 'مدير مطعم',
    company: 'Restaurant Group',
    location: 'بورتو',
    salary: '€1800-2500',
    type: 'دوام كامل',
    description: 'فرصة عمل كمدير مطعم في مجموعة مطاعم مرموقة في بورتو. نوفر تأشيرة عمل ومساعدة في السكن.',
    requirements: ['خبرة 2+ سنوات في الإدارة', 'معرفة بالإنجليزية أو الفرنسية', 'مهارات قيادية'],
    postedDate: '2024-01-14',
    category: 'ضيافة'
  },
  {
    id: 3,
    title: 'ممرض/ممرضة',
    company: 'Hospital Central',
    location: 'لشبونة',
    salary: '€2000-2800',
    type: 'دوام كامل',
    description: 'مطلوب ممرضين وممرضات للعمل في مستشفى مركزي. نوفر دورات تدريبية ومعادلة الشهادات.',
    requirements: ['شهادة تمريض معترف بها', 'خبرة سنتين على الأقل', 'معرفة أساسية بالبرتغالية'],
    postedDate: '2024-01-13',
    category: 'صحة'
  },
  {
    id: 4,
    title: 'عامل بناء',
    company: 'Construction Co',
    location: 'ألغارف',
    salary: '€1500-2000',
    type: 'دوام كامل',
    description: 'فرص عمل في قطاع البناء والتشييد في منطقة ألغارف السياحية. توفير السكن والمواصلات.',
    requirements: ['خبرة في البناء', 'قدرة بدنية جيدة', 'لا يشترط اللغة'],
    postedDate: '2024-01-12',
    category: 'بناء'
  },
  {
    id: 5,
    title: 'مدرس لغة عربية',
    company: 'Language School',
    location: 'لشبونة',
    salary: '€1600-2200',
    type: 'دوام جزئي',
    description: 'مدرسة لغات تبحث عن مدرسين للغة العربية. ساعات عمل مرنة وبيئة عمل ممتازة.',
    requirements: ['متحدث أصلي للعربية', 'خبرة في التدريس', 'إجادة الإنجليزية'],
    postedDate: '2024-01-11',
    category: 'تعليم'
  },
  {
    id: 6,
    title: 'محاسب',
    company: 'Finance Solutions',
    location: 'بورتو',
    salary: '€2200-3000',
    type: 'دوام كامل',
    description: 'شركة محاسبة دولية تبحث عن محاسب ذو خبرة. فرصة للعمل مع عملاء متنوعين.',
    requirements: ['شهادة محاسبة', 'خبرة 3+ سنوات', 'معرفة ببرامج المحاسبة'],
    postedDate: '2024-01-10',
    category: 'مالية'
  },
  {
    id: 7,
    title: 'سائق توصيل',
    company: 'Delivery Express',
    location: 'لشبونة',
    salary: '€1400-1800',
    type: 'دوام كامل',
    description: 'مطلوب سائقين للتوصيل في لشبونة. نوفر السيارة والتأمين الصحي.',
    requirements: ['رخصة قيادة سارية', 'معرفة بشوارع المدينة', 'هاتف ذكي'],
    postedDate: '2024-01-09',
    category: 'نقل'
  },
  {
    id: 8,
    title: 'مصمم جرافيك',
    company: 'Creative Agency',
    location: 'لشبونة',
    salary: '€2000-2800',
    type: 'دوام كامل',
    description: 'وكالة إبداعية تبحث عن مصمم جرافيك موهوب. إمكانية العمل عن بعد بعض الأيام.',
    requirements: ['معرفة بـ Adobe Creative Suite', 'بورتفوليو قوي', 'خبرة 2+ سنوات'],
    postedDate: '2024-01-08',
    category: 'تصميم'
  }
];

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const handleSearch = () => {
    let filtered = initialJobs;

    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.includes(searchTerm) ||
        job.company.includes(searchTerm) ||
        job.description.includes(searchTerm)
      );
    }

    if (locationFilter) {
      filtered = filtered.filter(job => job.location === locationFilter);
    }

    if (categoryFilter) {
      filtered = filtered.filter(job => job.category === categoryFilter);
    }

    setJobs(filtered);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>🇵🇹 فرص العمل في البرتغال</h1>
        <p>ابحث عن عقد عمل في البرتغال من الجزائر</p>
      </header>

      <section className="search-section">
        <div className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="ابحث عن وظيفة، شركة، أو مهارة..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            🔍 بحث
          </button>
        </div>

        <div className="filters">
          <select
            className="filter-select"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="">كل المدن</option>
            <option value="لشبونة">لشبونة</option>
            <option value="بورتو">بورتو</option>
            <option value="ألغارف">ألغارف</option>
          </select>

          <select
            className="filter-select"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">كل المجالات</option>
            <option value="تقنية">تقنية</option>
            <option value="ضيافة">ضيافة</option>
            <option value="صحة">صحة</option>
            <option value="بناء">بناء</option>
            <option value="تعليم">تعليم</option>
            <option value="مالية">مالية</option>
            <option value="نقل">نقل</option>
            <option value="تصميم">تصميم</option>
          </select>
        </div>
      </section>

      <div className="jobs-grid">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <div>
                <h3 className="job-title">{job.title}</h3>
                <p className="company">{job.company}</p>
              </div>
              <span className="salary-badge">{job.salary}</span>
            </div>

            <div className="job-details">
              <span className="detail-item">📍 {job.location}</span>
              <span className="detail-item">⏰ {job.type}</span>
              <span className="detail-item">📅 {job.postedDate}</span>
            </div>

            <p className="job-description">{job.description}</p>

            <div className="job-tags">
              {job.requirements.map((req, index) => (
                <span key={index} className="tag">
                  {req}
                </span>
              ))}
            </div>

            <button className="apply-button">تقدم الآن</button>
          </div>
        ))}
      </div>

      <section className="info-section">
        <h2>معلومات مهمة للعمل في البرتغال</h2>

        <div className="info-grid">
          <div className="info-card">
            <h3>📋 التأشيرة والإقامة</h3>
            <ul>
              <li>عقد عمل رسمي مطلوب للحصول على تأشيرة العمل</li>
              <li>مدة معالجة التأشيرة: 2-3 أشهر</li>
              <li>إمكانية الحصول على الإقامة الدائمة بعد 5 سنوات</li>
              <li>حق لم الشمل للعائلة</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>💰 المعيشة والرواتب</h3>
            <ul>
              <li>الحد الأدنى للأجور: €820 شهرياً</li>
              <li>متوسط تكلفة المعيشة في لشبونة: €1200-1500</li>
              <li>السكن المشترك متوفر بأسعار معقولة</li>
              <li>نظام صحي عام ممتاز</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>🗣️ اللغة والاندماج</h3>
            <ul>
              <li>تعلم البرتغالية يسهل الاندماج</li>
              <li>دورات لغة مجانية متاحة للمقيمين</li>
              <li>الإنجليزية منتشرة في المدن الكبرى</li>
              <li>جالية عربية نشطة ومتعاونة</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>✅ المزايا والحقوق</h3>
            <ul>
              <li>22 يوم إجازة سنوية مدفوعة</li>
              <li>تأمين صحي شامل</li>
              <li>راتب الشهر 13 و14 (مكافآت)</li>
              <li>حماية قانونية للعمال</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>🎓 الشهادات والمعادلة</h3>
            <ul>
              <li>معادلة الشهادات الجزائرية ممكنة</li>
              <li>بعض المهن تتطلب ترخيص مزاولة</li>
              <li>شهادات التقنية معترف بها</li>
              <li>دورات تدريبية متاحة</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>🏢 القطاعات المطلوبة</h3>
            <ul>
              <li>التكنولوجيا والبرمجة (رواتب عالية)</li>
              <li>السياحة والضيافة</li>
              <li>الصحة والتمريض</li>
              <li>البناء والتشييد</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="info-section">
        <h2>خطوات التقديم</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>1️⃣ البحث والتقديم</h3>
            <p>ابحث عن الوظيفة المناسبة وقدم طلبك مع سيرة ذاتية محدثة</p>
          </div>
          <div className="info-card">
            <h3>2️⃣ المقابلة</h3>
            <p>استعد للمقابلة (قد تكون عن بعد) وأظهر مهاراتك وخبراتك</p>
          </div>
          <div className="info-card">
            <h3>3️⃣ عقد العمل</h3>
            <p>احصل على عقد عمل رسمي موقع من الشركة البرتغالية</p>
          </div>
          <div className="info-card">
            <h3>4️⃣ التأشيرة</h3>
            <p>قدم طلب التأشيرة في السفارة البرتغالية بالجزائر</p>
          </div>
        </div>
      </section>
    </div>
  );
}
