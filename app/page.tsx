import Header from "./components/Header";

export default function Home() {
  const projects = [
    {
      title: 'Site web pour une entreprise de construction',
      stacks: ['react js', 'tailwind css'],
      demo: 'https://keramos237.netlify.app'
    },
    {
      title: 'Blog sur le developpement personnel',
      stacks: ['react js', 'tailwind css'],
      demo: 'https://the-mind.netlify.app'
    },
    {
      title: 'Générateur de questionnaire à partir d\'un document pdf',
      stacks: ['react js', 'tailwind css'],
      demo: 'https://soquestionnaire.netlify.app'
    }
  ]
  return (
    <>
      <Header />
      <main className="px-6">
        <p className="text-justify leading-relaxed font-sans text-xl w-full max-w-[800px] mx-auto mb-6">
          Salut! moi c'est <strong>YOBA SABO</strong> étudiant en génie logiciel niveau licence et en parallèle <strong>Developpeur web junior.</strong>
          Je travaille avec des technos à l'instar de <strong>Next js</strong> en fullstack, je fais le style avec <strong>Tailwind css.</strong>
          Je suis curieux et passionné par de désir de résoudre des problèmes de la vie courantes en utilisant de la programmation informatique.
          Je souhaite acquérir plus de compétences donc n'hésitez pas à me contacter pour toute collaboration. Faites confiance à un jeune ambisieux.
        </p>
        <section className="max-w-[800px] mx-auto">
          <h1 className="font-semibold text-2xl mb-4">Mes projets</h1>
          <div className="flex flex-wrap gap-4">
            {projects.map((item, index) => (
              <div key={index} className="border p-4 rounded max-w-[400px] ">
                <h1 className="font-semibold text-lg mb-4"> {item.title} </h1>
                <div className="flex flex-wrap gap-3 mb-4">
                  {item.stacks.map((it, index) => (
                    <span key={index} className="rounded px-3 py-1 bg-gray-800 text-gray-300"> {it} </span>
                  ))}
                </div>
                <a href="" className="underline underline-offset-2">Démo</a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>

  );
}
