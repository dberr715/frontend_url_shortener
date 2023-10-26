import "../index.css";
export default function LinkList({ linkList }) {
  const src_url = import.meta.env.VITE_API_URL;
  return (
    <>
      {linkList.map((link, id) => {
        return (
          <li key={id}>
            <a
              href={`${src_url}/yeet/${link.short_url}`}
              title={`Short link to ${link.title}`}
              target="_blank"
              rel="noreferrer"
            >
              {link.title}
            </a>
          </li>
        );
      })}
    </>
  );
}
