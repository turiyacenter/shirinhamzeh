import Head from 'next/head'
import { useEffect, useState } from 'react'

interface TiwallActivity {
  title: string;
  url: string;
}

export default function Home() {
  const [activities, setActivities] = useState<TiwallActivity[]>([])

  useEffect(() => {
    fetch('/data/tiwall.json')
      .then(res => res.json())
      .then(setActivities)
  }, [])

  return (
    <div>
      <Head>
        <title>شیرین حمزه | روابط عمومی و هنر</title>
        <meta name="description" content="نمونه‌کارهای شیرین حمزه در زمینه روابط عمومی، گرافیک و فعالیت‌های هنری" />
        <meta property="og:title" content="شیرین حمزه | Portfolio" />
        <meta property="og:description" content="نمونه‌کارهای حرفه‌ای در زمینه روابط عمومی و هنر" />
        <meta property="og:image" content="/img/cover.jpg" />
      </Head>

      <header className="hero">
        <img src="/img/cover.jpg" alt="کاور" className="cover" />
        <h1>شیرین حمزه</h1>
        <p>روابط عمومی | تولید محتوا | گرافیک | موشن</p>
      </header>

      <section className="services">
        <h2>خدمات</h2>
        <ul>
          <li>روابط عمومی</li>
          <li>تولید محتوا</li>
          <li>مدیریت فضای مجازی</li>
          <li>موشن گرافی</li>
          <li>طراح گرافیک</li>
        </ul>
      </section>

      <section className="activities">
        <h2>فعالیت‌های هنری</h2>
        <ul>
          {activities.map((act, i) => (
            <li key={i}><a href={act.url} target="_blank">{act.title}</a></li>
          ))}
        </ul>
      </section>

      <footer className="contact">
        <h2>ارتباط با من</h2>
        <p>ایمیل: shirin@example.com</p>
        <p>اینستاگرام: @shirinhamze</p>
      </footer>
    </div>
  )
}
