import { useEffect, useState } from "react";
import newspic from "../assets/news_header.webp";
import Newscards from "../components/Newscards";
import newsServices from "../services/mainnews.js";

const Churchnews = () => {
  const [news, setNews] = useState([]);
  const [addpage, setAddpage] = useState(false);
  const [search, setSearch] = useState("");

  const fetchNews = () => {
    newsServices.getAll().then((res) => {
      setNews(res.data);
    });
  };
  useEffect(() => {
    fetchNews();
  }, []);

  const handleAddPage = (event) => {
    event.preventDefault();
    setAddpage(true);
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const newsToShow =
    search.length === 0
      ? news
      : news.filter((n) =>
          n.title.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <>
      <img src={newspic} />

      <button onClick={handleAddPage}>Add Church News</button>

      <input onChange={handleSearch} placeholder="Search" />
      {newsToShow.map((n) => (
        <Newscards
          key={n._id}
          image={n.image}
          title={n.title}
          author={n.author}
          content={n.content}
        />
      ))}

      {addpage && <AddNews fetchNews={fetchNews} setAddpage={setAddpage} />}
    </>
  );
};

const AddNews = ({ fetchNews, setAddpage }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");

  const handleAddExit = (event) => {
    event.preventDefault();
    setAddpage(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newObject = {
      title: title,
      image: image,
      author: name,
      content: body,
    };
    newsServices
      .create(newObject)
      .then(() => {
        setTitle("");
        setName("");
        setImage("");
        setBody("");
        setAddpage(false);
        fetchNews();
      })
      .catch((error) => {
        console.log("Failed to submit news: ", error);
      });
  };

  const handleSubject = (event) => {
    setTitle(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleBody = (event) => {
    setBody(event.target.value);
  };
  const handleImage = (event) => {
    setImage(event.target.value);
  };

  return (
    <>
      <p onClick={handleAddExit}>x</p>
      <form>
        <label htmlFor="subject">Subject</label>
        <input
          onChange={handleSubject}
          type="text"
          id="subject"
          name="subject"
        />

        <label htmlFor="name">Name</label>
        <input onChange={handleName} type="text" id="name" name="name" />

        <label htmlFor="body">Body</label>
        <textarea
          onChange={handleBody}
          rows={10}
          cols={70}
          type="text"
          id="body"
          name="body"
        />

        <label htmlFor="image">Image</label>
        <input onChange={handleImage} type="text" id="image" name="image" />
      </form>
      <button onClick={handleAddExit}>Cancel</button>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Churchnews;
