import { useMemo, useState } from "react"

type IconName = "arrow" | "bell" | "calendar" | "check" | "chevron" | "close" | "compass" | "heart" | "location" | "map" | "message" | "minus" | "people" | "plus" | "search" | "send" | "settings" | "spark" | "thumbDown" | "thumbUp"

const paths: Record<IconName, React.ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M8 3v4m8-4v4M3 10h18" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" />
    </>
  ),
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
  ),
  location: (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  map: (
    <>
      <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" />
      <path d="M9 3v15m6-12v15" />
    </>
  ),
  message: (
    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" />
  ),
  minus: <path d="M5 12h14" />,
  people: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  plus: <path d="M12 5v14m-7-7h14" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  send: (
    <>
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.09A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3v-4h.09A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3h4v.09A1.7 1.7 0 0 0 15.4 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.14.37.36.7.66.96.3.25.69.4 1.1.4H21v4h-.09A1.7 1.7 0 0 0 19.4 15Z" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Z" />
      <path d="m18.5 14 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3ZM5 14l.7 2.3L8 17l-2.3.7L5 20l-.7-2.3L2 17l2.3-.7L5 14Z" />
    </>
  ),
  thumbDown: (
    <>
      <path d="M7 3v11H3.5A1.5 1.5 0 0 1 2 12.5v-8A1.5 1.5 0 0 1 3.5 3H7Z" />
      <path d="M7 5c2-1.3 4-2 6.2-2H15a2 2 0 0 1 1.9 1.4l2.8 8.4A1.7 1.7 0 0 1 18.1 15H14l.7 3.3a2.2 2.2 0 0 1-1.2 2.4l-.5.3-4-7H7" />
    </>
  ),
  thumbUp: (
    <>
      <path d="M7 10v11H3.5A1.5 1.5 0 0 1 2 19.5v-8A1.5 1.5 0 0 1 3.5 10H7Z" />
      <path d="M7 19c2 1.3 4 2 6.2 2H15a2 2 0 0 0 1.9-1.4l2.8-8.4A1.7 1.7 0 0 0 18.1 9H14l.7-3.3a2.2 2.2 0 0 0-1.2-2.4L13 3l-4 7H7" />
    </>
  ),
}

function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: IconName
  size?: number
  className?: string
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const people = [
  {
    id: 1,
    name: "Maja",
    age: 26,
    distance: "350 m",
    activity: "Kawa i spacer",
    tag: "Spontanicznie",
    color: "#FF765D",
    image:
      "https://images.unsplash.com/photo-1674770715566-e80fe0bca062?auto=format&fit=crop&w=360&h=360&q=85",
    x: "67%",
    y: "27%",
    online: true,
  },
  {
    id: 2,
    name: "Ola",
    age: 24,
    distance: "700 m",
    activity: "Fotografia",
    tag: "Kreatywnie",
    color: "#7967E8",
    image:
      "https://images.unsplash.com/photo-1584521855888-36b9919d5e9e?auto=format&fit=crop&w=360&h=360&q=85",
    x: "28%",
    y: "22%",
    online: true,
  },
  {
    id: 3,
    name: "Kuba",
    age: 29,
    distance: "1,2 km",
    activity: "Rower po mieście",
    tag: "Aktywnie",
    color: "#19A68C",
    image:
      "https://images.unsplash.com/photo-1655819560053-a19fa98add91?auto=format&fit=crop&w=360&h=360&q=85",
    x: "45%",
    y: "57%",
    online: false,
  },
  {
    id: 4,
    name: "Nina",
    age: 27,
    distance: "1,8 km",
    activity: "Koncert wieczorem",
    tag: "Muzyka",
    color: "#E59F2A",
    image:
      "https://images.unsplash.com/photo-1599148018825-dab245bb2528?auto=format&fit=crop&w=360&h=360&q=85",
    x: "77%",
    y: "66%",
    online: true,
  },
  {
    id: 5,
    name: "Tomek",
    age: 31,
    distance: "2,1 km",
    activity: "Padel o 18:00",
    tag: "Sport",
    color: "#4090D0",
    image:
      "https://images.unsplash.com/photo-1782290816670-63c798f7506d?auto=format&fit=crop&w=360&h=360&q=85",
    x: "19%",
    y: "70%",
    online: true,
  },
]

const filters = ["Wszyscy", "Polubione", "Teraz", "Aktywnie", "Kawa", "Kultura"]

export default function App() {
  const [activeFilter, setActiveFilter] = useState("Wszyscy")
  const [selectedId, setSelectedId] = useState(1)
  const [view, setView] = useState<"map" | "list">("map")
  const [query, setQuery] = useState("")
  const [inviteOpen, setInviteOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [chatStarted, setChatStarted] = useState(false)
  const [messageText, setMessageText] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "them",
      text: "Hej! Miło Cię poznać. Masz dziś ochotę wyskoczyć na kawę?",
      time: "12:42",
    },
    {
      id: 2,
      from: "me",
      text: "Cześć! Jasne, brzmi świetnie.",
      time: "12:44",
    },
  ])
  const [messageReactions, setMessageReactions] =
    useState<Record<number, "heart" | "like" | "dislike">>({})
  const [likedProfiles, setLikedProfiles] = useState<number[]>([2, 4])

  const visiblePeople = useMemo(
    () =>
      people.filter(
        (person) =>
          (activeFilter !== "Polubione" || likedProfiles.includes(person.id)) &&
          (person.name.toLowerCase().includes(query.toLowerCase()) ||
            person.activity.toLowerCase().includes(query.toLowerCase())),
      ),
    [activeFilter, likedProfiles, query],
  )
  const selected =
    people.find((person) => person.id === selectedId) ?? people[0]

  function sendInvite() {
    setSent(true)
    window.setTimeout(() => {
      setInviteOpen(false)
      setSent(false)
    }, 1400)
  }

  function openProfile(personId: number) {
    setSelectedId(personId)
    setProfileOpen(true)
    setChatStarted(false)
    setView("list")
  }

  function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const text = messageText.trim()
    if (!text) return

    setMessages((current) => [
      ...current,
      {
        id: Date.now(),
        from: "me",
        text,
        time: new Intl.DateTimeFormat("pl-PL", {
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date()),
      },
    ])
    setMessageText("")
  }

  function reactToMessage(
    messageId: number,
    reaction: "heart" | "like" | "dislike",
  ) {
    setMessageReactions((current) => {
      if (current[messageId] === reaction) {
        const next = { ...current }
        delete next[messageId]
        return next
      }

      return { ...current, [messageId]: reaction }
    })
  }

  function toggleLikedProfile(personId: number) {
    setLikedProfiles((current) =>
      current.includes(personId)
        ? current.filter((id) => id !== personId)
        : [...current, personId],
    )
  }

  function selectFilter(filter: string) {
    setActiveFilter(
      filter === "Polubione" && activeFilter === "Polubione"
        ? "Wszyscy"
        : filter,
    )
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="brand" aria-label="ConnectMe — strona główna">
          <span className="brand-mark">
            <span />
          </span>
          <span>ConnectMe</span>
        </button>

        <label className="searchbox">
          <Icon name="search" size={19} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Szukaj osób lub aktywności"
          />
          <kbd>⌘ K</kbd>
        </label>

        <div className="top-actions">
          <button className="location-button">
            <Icon name="location" size={17} />
            <span>Gdańsk</span>
            <Icon name="chevron" size={15} />
          </button>
          <button
            className="icon-button notification"
            aria-label="Powiadomienia"
          >
            <Icon name="bell" size={20} />
            <span />
          </button>
          <button className="profile-button" aria-label="Twój profil">
            <img
              src="https://images.unsplash.com/photo-1608145550502-f53571aa63e1?auto=format&fit=crop&w=100&h=100&q=80"
              alt=""
            />
            <span>Alex</span>
            <Icon name="chevron" size={15} />
          </button>
        </div>
      </header>

      <div className="workspace">
        <aside className="sidebar">
          <nav>
            <button className="nav-item active">
              <Icon name="compass" />
              <span>Odkrywaj</span>
            </button>
            <button className="nav-item">
              <Icon name="people" />
              <span>Znajomi</span>
              <span className="nav-count">8</span>
            </button>
            <button className="nav-item">
              <Icon name="message" />
              <span>Wiadomości</span>
              <span className="nav-dot" />
            </button>
            <button className="nav-item">
              <Icon name="calendar" />
              <span>Plany</span>
            </button>
          </nav>
          <div className="sidebar-bottom">
            <div className="mini-promo">
              <span className="promo-icon">
                <Icon name="spark" size={18} />
              </span>
              <strong>Zrób pierwszy hop</strong>
              <p>Dodaj plan i poznaj ludzi, którzy chcą dołączyć.</p>
              <button onClick={() => setInviteOpen(true)}>
                Utwórz plan <Icon name="arrow" size={16} />
              </button>
            </div>
            <button className="nav-item">
              <Icon name="settings" />
              <span>Ustawienia</span>
            </button>
          </div>
        </aside>

        <main className="main-content">
          {chatStarted ? (
            <section className="chat-screen">
              <header className="chat-header">
                <button
                  className="chat-back"
                  onClick={() => setChatStarted(false)}
                  aria-label="Wróć do profilu"
                >
                  <Icon name="arrow" size={19} />
                </button>
                <span className="chat-person-avatar">
                  <img src={selected.image} alt="" />
                  <i />
                </span>
                <div>
                  <strong>
                    {selected.name}, {selected.age}
                  </strong>
                  <span>Aktywna teraz</span>
                </div>
                <button
                  className="chat-profile-link"
                  onClick={() => setChatStarted(false)}
                >
                  Zobacz profil
                </button>
              </header>

              <div className="chat-messages" aria-live="polite">
                <div className="chat-day">DZISIAJ</div>
                <div className="chat-match-note">
                  <span className="chat-match-avatars">
                    <img src={selected.image} alt="" />
                    <img
                      src="https://images.unsplash.com/photo-1608145550502-f53571aa63e1?auto=format&fit=crop&w=100&h=100&q=80"
                      alt=""
                    />
                  </span>
                  <strong>To może być dobry hop</strong>
                  <p>
                    Macie podobne zainteresowania. Zacznijcie od krótkiego
                    „cześć”.
                  </p>
                </div>

                <div className="message-list">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`message-row ${
                        message.from === "me" ? "mine" : ""
                      }`}
                    >
                      {message.from === "them" && (
                        <img src={selected.image} alt="" />
                      )}
                      <div>
                        <p>{message.text}</p>
                        <div className="message-meta">
                          <span>
                            {message.time}
                            {message.from === "me" && (
                              <Icon name="check" size={12} />
                            )}
                          </span>
                          <div
                            className="message-reactions"
                            aria-label="Reakcje na wiadomość"
                          >
                            <button
                              className={
                                messageReactions[message.id] === "heart"
                                  ? "active heart"
                                  : ""
                              }
                              onClick={() =>
                                reactToMessage(message.id, "heart")
                              }
                              aria-label="Dodaj serce"
                              aria-pressed={
                                messageReactions[message.id] === "heart"
                              }
                            >
                              <Icon name="heart" size={13} />
                            </button>
                            <button
                              className={
                                messageReactions[message.id] === "like"
                                  ? "active like"
                                  : ""
                              }
                              onClick={() => reactToMessage(message.id, "like")}
                              aria-label="Lubię tę wiadomość"
                              aria-pressed={
                                messageReactions[message.id] === "like"
                              }
                            >
                              <Icon name="thumbUp" size={13} />
                            </button>
                            <button
                              className={
                                messageReactions[message.id] === "dislike"
                                  ? "active dislike"
                                  : ""
                              }
                              onClick={() =>
                                reactToMessage(message.id, "dislike")
                              }
                              aria-label="Nie lubię tej wiadomości"
                              aria-pressed={
                                messageReactions[message.id] === "dislike"
                              }
                            >
                              <Icon name="thumbDown" size={13} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <form className="chat-composer" onSubmit={sendMessage}>
                <button type="button" aria-label="Dodaj załącznik">
                  <Icon name="plus" size={21} />
                </button>
                <label>
                  <input
                    value={messageText}
                    onChange={(event) => setMessageText(event.target.value)}
                    placeholder={`Napisz wiadomość do ${selected.name}...`}
                    autoFocus
                  />
                </label>
                <button
                  type="submit"
                  className="chat-send"
                  disabled={!messageText.trim()}
                >
                  <span>Wyślij</span>
                  <Icon name="send" size={18} />
                </button>
              </form>
            </section>
          ) : (
            <>
              <section className="intro-row">
                <div>
                  <p className="eyebrow">ODKRYWAJ W POBLIŻU</p>
                  <h1>
                    Poznaj ludzi w pobliżu z <em>ConnectMe</em>
                  </h1>
                  <p>Znajdź ludzi w okolicy i zróbcie coś razem.</p>
                </div>
                <div className="view-toggle" aria-label="Zmień widok">
                  <button
                    onClick={() => setView("map")}
                    className={view === "map" ? "active" : ""}
                  >
                    <Icon name="map" size={17} /> Mapa
                  </button>
                  <button
                    onClick={() => setView("list")}
                    className={view === "list" ? "active" : ""}
                  >
                    <Icon name="people" size={17} /> Lista
                  </button>
                </div>
              </section>

              <section className="filter-row">
                <div className="filters">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      className={activeFilter === filter ? "active" : ""}
                      onClick={() => selectFilter(filter)}
                      aria-pressed={activeFilter === filter}
                    >
                      {filter === "Polubione" && (
                        <Icon name="heart" size={12} />
                      )}
                      {filter === "Teraz" && <span className="live-dot" />}
                      {filter}
                    </button>
                  ))}
                </div>
                <button className="filter-settings">
                  <Icon name="settings" size={17} /> Filtry <span>2</span>
                </button>
              </section>

              <section
                className={`discovery-panel ${
                  view === "list" ? "list-view" : ""
                }`}
              >
                <div className="map-area">
                  <svg
                    className="map-lines"
                    viewBox="0 0 1000 680"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      className="water"
                      d="M0 0h268c-20 90 15 130 8 210-9 107-82 130-60 250 12 69 69 130 48 220H0Z"
                    />
                    <path
                      className="park"
                      d="M706 0c-4 68-54 90-26 152 30 67 113 66 160 28 62-50 110-54 160-34V0Z"
                    />
                    <g className="minor-roads">
                      <path d="M300-30 355 710M451-20 425 710M623-20 590 710M820-20 762 710M250 120 1020 178M230 287 1020 347M210 480 1010 530" />
                      <path d="M282 40c178 80 238 24 373 78s170 160 370 175M255 600c190-90 335-36 432-99s147-100 330-72" />
                    </g>
                    <g className="main-roads">
                      <path d="M328-20c18 168 99 217 100 348 2 182-100 221-70 382" />
                      <path d="M220 242c163-2 239 68 386 58 165-10 231-97 430-68" />
                      <path d="M530-20c-8 104 72 155 134 229 89 107 55 277 202 501" />
                    </g>
                    <g className="blocks">
                      {Array.from({ length: 42 }).map((_, i) => (
                        <rect
                          key={i}
                          x={300 + (i % 7) * 97 + (i % 3) * 9}
                          y={24 + Math.floor(i / 7) * 105}
                          width={38 + (i % 4) * 8}
                          height={18 + (i % 3) * 8}
                          rx="3"
                          transform={`rotate(${(i % 5) * 7 - 12} ${300 + (i % 7) * 97} ${24 + Math.floor(i / 7) * 105})`}
                        />
                      ))}
                    </g>
                    <text x="82" y="360">
                      ZATOKA GDAŃSKA
                    </text>
                    <text x="495" y="230">
                      WRZESZCZ
                    </text>
                    <text x="740" y="470">
                      ZASPA
                    </text>
                    <text x="760" y="92">
                      OLIWA
                    </text>
                  </svg>

                  <div className="map-top">
                    <span>
                      <i />
                      {visiblePeople.length + 19} osoby dostępne teraz
                    </span>
                  </div>

                  {visiblePeople.map((person) => (
                    <button
                      key={person.id}
                      className={`map-avatar ${
                        selectedId === person.id ? "selected" : ""
                      }`}
                      style={
                        {
                          left: person.x,
                          top: person.y,
                          "--pin": person.color,
                        } as React.CSSProperties
                      }
                      onClick={() => openProfile(person.id)}
                      aria-label={`Pokaż profil: ${person.name}`}
                    >
                      <img src={person.image} alt="" />
                      <span>{person.distance}</span>
                    </button>
                  ))}

                  <button
                    className="user-location"
                    aria-label="Twoja lokalizacja"
                  >
                    <span>
                      <i />
                    </span>
                  </button>
                  <div className="map-controls">
                    <button aria-label="Przybliż">
                      <Icon name="plus" />
                    </button>
                    <button aria-label="Oddal">
                      <Icon name="minus" />
                    </button>
                    <button aria-label="Wyśrodkuj mapę">
                      <Icon name="location" />
                    </button>
                  </div>

                  <div className="place-card">
                    <img
                      src="/assets/coast.webp"
                      alt="Wybrzeże i plaża widziane z góry"
                    />
                    <div>
                      <span>POPULARNE TERAZ</span>
                      <strong>Spacer w Jelitkowie</strong>
                      <p>12 osób w okolicy</p>
                    </div>
                    <button aria-label="Zobacz miejsce">
                      <Icon name="chevron" />
                    </button>
                  </div>
                </div>

                <aside className="people-panel">
                  {profileOpen ? (
                    <div className="profile-detail">
                      <div
                        className="profile-hero"
                        style={{ backgroundImage: `url(${selected.image})` }}
                      >
                        <button
                          className="profile-back"
                          onClick={() => setProfileOpen(false)}
                          aria-label="Wróć do listy"
                        >
                          <Icon name="arrow" size={18} />
                        </button>
                        <button
                          className={`profile-favorite ${
                            likedProfiles.includes(selected.id) ? "active" : ""
                          }`}
                          onClick={() => toggleLikedProfile(selected.id)}
                          aria-label={
                            likedProfiles.includes(selected.id)
                              ? "Usuń z polubionych"
                              : "Dodaj do polubionych"
                          }
                          aria-pressed={likedProfiles.includes(selected.id)}
                        >
                          <Icon name="heart" size={18} />
                        </button>
                        <span
                          className="profile-tag"
                          style={
                            { "--tag": selected.color } as React.CSSProperties
                          }
                        >
                          {selected.tag}
                        </span>
                      </div>

                      <div className="profile-body">
                        <div className="profile-title">
                          <div>
                            <h2>
                              {selected.name}, {selected.age}
                              <span className="verified">
                                <Icon name="check" size={10} />
                              </span>
                            </h2>
                            <p>
                              <span className="online-dot" /> Dostępna teraz ·{" "}
                              {selected.distance}
                            </p>
                          </div>
                          <span className="match-score">92% match</span>
                        </div>

                        <p className="profile-bio">
                          „{selected.activity}? Chętnie poznam kogoś z dobrą
                          energią i pomysłem na spontaniczne wyjście.”
                        </p>

                        <div className="interest-chips">
                          <span>Muzyka</span>
                          <span>Podróże</span>
                          <span>Dobry food</span>
                        </div>

                        <button
                          className={`start-chat ${
                            chatStarted ? "started" : ""
                          }`}
                          onClick={() => setChatStarted(true)}
                        >
                          <Icon
                            name={chatStarted ? "check" : "message"}
                            size={20}
                          />
                          {chatStarted ? "Czat rozpoczęty" : "Rozpocznij czat"}
                        </button>

                        <div className="quick-hop">
                          <div>
                            <span>SZYBKI HOP</span>
                            <strong>Zaproponuj spotkanie</strong>
                          </div>
                          {["Kawa na mieście"].map((activity, index) => (
                            <button
                              key={activity}
                              onClick={() => setInviteOpen(true)}
                            >
                              <span>{["01", "02", "03"][index]}</span>
                              {activity}
                              <Icon name="chevron" size={16} />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="panel-heading">
                        <div>
                          <span>W POBLIŻU</span>
                          <strong>{visiblePeople.length + 19} osoby</strong>
                        </div>
                        <button aria-label="Więcej opcji">•••</button>
                      </div>
                      <div className="people-list">
                        {visiblePeople.map((person) => (
                          <button
                            key={person.id}
                            className={`person-row ${
                              selectedId === person.id ? "active" : ""
                            }`}
                            onClick={() => openProfile(person.id)}
                          >
                            <span className="avatar-wrap">
                              <img src={person.image} alt="" />
                              {person.online && <i />}
                            </span>
                            <span className="person-copy">
                              <strong>
                                {person.name}, {person.age}{" "}
                                {selectedId === person.id && (
                                  <span className="verified">
                                    <Icon name="check" size={10} />
                                  </span>
                                )}
                              </strong>
                              <small>
                                <Icon name="location" size={12} />{" "}
                                {person.distance} · {person.activity}
                              </small>
                            </span>
                            <Icon name="chevron" size={17} />
                          </button>
                        ))}
                        {visiblePeople.length === 0 && (
                          <div className="empty-state">
                            <Icon name="search" />
                            <strong>Brak wyników</strong>
                            <span>Spróbuj innej nazwy lub aktywności.</span>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </aside>
              </section>
            </>
          )}
        </main>
      </div>

      <nav className="mobile-nav">
        <button className="active">
          <Icon name="compass" />
          <span>Odkrywaj</span>
        </button>
        <button>
          <Icon name="people" />
          <span>Znajomi</span>
        </button>
        <button className="mobile-hop" onClick={() => setInviteOpen(true)}>
          <Icon name="plus" />
        </button>
        <button>
          <Icon name="message" />
          <span>Wiadomości</span>
        </button>
        <button>
          <Icon name="calendar" />
          <span>Plany</span>
        </button>
      </nav>

      {inviteOpen && (
        <div
          className="modal-backdrop"
          onMouseDown={() => setInviteOpen(false)}
        >
          <div
            className="invite-modal"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setInviteOpen(false)}
            >
              <Icon name="close" />
            </button>
            <span className="modal-symbol">
              <Icon name="spark" />
            </span>
            <p className="eyebrow">SZYBKI HOP</p>
            <h2>Zaproś {selected.name}</h2>
            <p className="modal-lead">
              Wybierz pomysł na wspólne wyjście. Bez presji — po prostu zróbcie
              hop.
            </p>
            <div className="activity-options">
              {["Kawa na mieście"].map((activity, index) => (
                <button className={index === 0 ? "active" : ""} key={activity}>
                  <span>{["01", "02", "03"][index]}</span>
                  {activity}
                  <Icon name="chevron" size={16} />
                </button>
              ))}
            </div>
            <button
              className={`send-invite ${sent ? "sent" : ""}`}
              onClick={sendInvite}
            >
              {sent ? (
                <>
                  <Icon name="check" /> Zaproszenie wysłane
                </>
              ) : (
                <>
                  <Icon name="send" /> Wyślij zaproszenie
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
