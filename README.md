# 🌐 Laura Montironi — Developer Portfolio

A personal portfolio built with Angular, documenting my journey from self-taught developer to full stack engineer.

---

## 🧭 The story behind this portfolio

This portfolio didn't start as an Angular app.

It started as a simple HTML + CSS page — my first real project, built before I had any formal training. Just a static page to put something out there, learn the basics, and have a place to show my work.

As I kept learning — JavaScript, then Angular, then FastAPI and PostgreSQL — the portfolio grew with me. Each time I learned something new, I rebuilt or added to it. The HTML/CSS became a component-based Angular app. The static links became lazy-loaded routes. The single page became a multi-section portfolio with CVs, project pages and a dark theme.

It's not a portfolio _about_ my journey — it _is_ my journey, committed to GitHub one push at a time.

---

## ✨ What's inside

- **About** — intro, tech stack, links to GitHub, LinkedIn and blog
- **Star Projects** — featured full stack projects with tech stack and links
- **Projects grid** — all projects built during bootcamp with image, description and links
- **CV** — two versions: Tech CV and Financial CV (previous career in Finance)
- **Contact** — direct email link
- **Project detail pages** — deep dives into each major project

---

## 🚀 Featured Projects

### 🎓 SaaS LMS Platform

Full stack learning management system with student dashboard, admin panel, JWT auth, course enrollment and lesson progress tracking.

- **Frontend**: Angular 21 + PrimeNG → [Netlify](https://saascourseflow.netlify.app)
- **Backend**: FastAPI + PostgreSQL → [Railway](https://saas-lms-backend-fastapi-postgresql-production.up.railway.app/docs)
- [Frontend repo](https://github.com/LauMontironi/SaaS-LMS-Frontend-FastAPI-PostgreSQL) · [Backend repo](https://github.com/LauMontironi/Saas_cursos_online)

### 🍔 UpgradeFood

Full stack food platform with FastAPI + Angular + MySQL + Cloudinary + Resend email API.

- [Repo](https://github.com/LauMontironi/upgrade-food)

### 📅 Family Scheduler

Integral system to sync family schedules, built with FastAPI + Angular + SQL + JWT.

- [Repo](https://github.com/LauMontironi/family-scheduler)

---

## 🛠️ Tech stack

| Layer     | Technologies                                    |
| --------- | ----------------------------------------------- |
| Frontend  | Angular 21, TypeScript, Bootstrap, Tailwind CSS |
| Backend   | Python, FastAPI, SQLAlchemy, Pydantic           |
| Databases | PostgreSQL, MySQL, MongoDB                      |
| Auth      | JWT, bcrypt                                     |
| Tools     | Git, GitHub, VS Code, Postman                   |
| Deploy    | Netlify, Railway, Vercel                        |

---

## 📁 Project structure

```
src/
├── app/
│   ├── pages/
│   │   ├── home/               # Main landing page
│   │   ├── cv-tech/            # Tech CV page
│   │   ├── cv-finance/         # Finance CV page
│   │   ├── upgrade-food/       # UpgradeFood project detail
│   │   ├── family-schedule/    # Family Scheduler project detail
│   │   └── saas-cursos-online/ # SaaS LMS project detail
│   ├── app.routes.ts           # Lazy-loaded routes
│   └── app.component.ts
```

---

## ⚙️ Run locally

```bash
git clone https://github.com/LauMontironi/portfolio
cd portfolio
npm install
ng serve
```

---

## 🔗 Links

- 🌐 Portfolio: [https://portfoliodev-laumontironi.netlify.app/](https://portfoliodev-laumontironi.netlify.app/)
- 💼 LinkedIn: [linkedin.com/in/laura-montironi](https://www.linkedin.com/in/laura-montironi)
- 🐙 GitHub: [github.com/LauMontironi](https://github.com/LauMontironi)
- ✍️ Blog: [mi-camino-dev-blog.vercel.app](https://mi-camino-dev-blog.vercel.app)
- 📧 Email: lau.montironi@gmail.com

---

_Built with curiosity, rebuilt with knowledge. The loop: Learn. Code. Build. Repeat._
