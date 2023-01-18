import Link from "next/link";

export default function newPost2() {
  return (
    <div>
      <header className="bg-blue-500 p-2">
        <div>
          {/* LOGO */}
        </div>
        <h3 className="text-yellow-300">¡Welcome, Creator!</h3>
        <p>Next you can complete the info about the brand, artist or tournament you want close to your location.</p>
      </header>
      <Link href={"/newpost"} className="m-3">Back</Link>
      <section className="p-2">
        <div className="bg-blue-500 h-2 rounded">{/* BARRA DE ESTADO */}</div>
        <h3>Pictures</h3>
        <p>Select maximun three pictures to make a galery</p>
        <fieldset className="border border-solid border-gray-400">
          <input name="image1" id="img1" type="file" />
          <input name="image2" id="img2" type="file" />
          <input name="image3" id="img3" type="file" />
        </fieldset>
      </section>
      <div className="flex justify-center items-center">
        <button className="bg-blue-500"><Link href={"/"}>Post</Link></button>
      </div>
    </div>
  )
}