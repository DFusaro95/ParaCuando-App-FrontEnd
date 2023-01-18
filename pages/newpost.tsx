import Link from "next/link";

export default function newPostPage() {
  return (
    <div>
      <header className="bg-blue-500 p-2">
        <div>
          {/* LOGO */}
        </div>
        <h3 className="text-yellow-300">¡Welcome, Creator!</h3>
        <p>Next you can complete the info about the brand, artist or tournament you want close to your location.</p>
      </header>
      <Link href={"/"} className="m-3">Back</Link>
      <section className="p-2">
        <div className="bg-stone-300 h-2 rounded"><div className="bg-blue-500 h-2 rounded w-3/5">{/* BARRA DE ESTADO */}</div></div>
        <form action="post" >
          <h3>Post</h3>
          <p>Basic Information</p>
          <fieldset className="border border-solid border-gray-400">
            <legend className="border-stone-500">Title of the post</legend>
            <input name="title" id="title" type="text" maxLength={150} />
          </fieldset>
          <select name="type" id="type">
            <option value="brands">Brands & Shops</option>
            <option value="artists">Artists & Concerts</option>
            <option value="tournaments">Tournaments</option>
          </select>
          <select name="categories" id="categories">
            <option value="clothes">Clothes & Accesories</option>
            <option value="sports">Sports</option>
            <option value="concerts">Concerts</option>
            <option value="meet">Meet & Greet</option>
            <option value="esports">E-Sport</option>
            <option value="pop">Pop / Rock</option>
            <option value="technologies">Technology</option>
            <option value="home">Home / Decoration</option>
            <option value="supplying">Supplying</option>
          </select>
          <fieldset className="border border-solid border-gray-400">
            <legend>Why do you recommend this?</legend>
            <input name="recommend" id="recommend" type="text" maxLength={250} />
          </fieldset>
          <fieldset className="border border-solid border-gray-400">
            <legend>Reference Link</legend>
            <input name="link" id="link" type="text" maxLength={500} />
          </fieldset>
        </form>
      </section>
      <div className="flex justify-center items-center">
        <button className="bg-blue-500"><Link href={"/newpost2"}>Next</Link></button>
      </div>
    </div>
  )
}