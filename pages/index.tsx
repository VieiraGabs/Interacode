import { NextPage } from 'next';
import Image from 'next/image';

import Nav from '../components/nav';
import Footer from '../components/footer';

const IndexPage: NextPage = () => {
  return (
    <>
      <div className="text-center bg-home">
        <Nav />
        <div className="flex flex-row space-x-64 w-2/5 m-auto text-black">
          <h1 className="text-3xl my-56 rounded-lg p-4">
            Querendo aprender a programar e não sabe por onde começar?
            Interacode é onde você vai dar os primeiros passos! Aqui você vai
            aprender a base da programação.
          </h1>
        </div>
      </div>
      <div className="text-center">
        <Image
          src="/logo3.png"
          alt="Logo Interacode"
          width={485}
          height={485}
        />
        <p className="text-3xl w-2/3 m-auto">
          O estudante terá acesso à diversos conteúdos e exemplos de uso sobre,
          HTML, CSS e JavaScript.
        </p>
      </div>

      <div className="flex flex-row space-x-48 w-5/6 m-auto mt-32">
        <section className="w-2/3">
          <h1 className="text-2xl font-bold">Bem vindo</h1>
          <p className="mt-8">
            Interacode foi criado com intuito de entregar um conteúdo pratico e
            de fácil entendimento sobre os primeiros passos da programação.
          </p>
        </section>

        <aside className="w-1/3 bg-nav p-4 rounded text-white">
          Com conteúdos para estudar nas três linguagens de programação, você
          terá também exemplos para te auxiliar e uma área para treinar seus
          conhecimentos.
        </aside>
      </div>

      <div className="flex flex-row space-x-48 w-5/6 m-auto my-32">
        <aside className="w-1/3 bg-nav p-4 rounded text-white">
          E quando você estiver se sentindo preparado, vai ser a hora de encarar
          alguns desafios propostos pela nossa plataforma.
        </aside>

        <section className="w-2/3">
          <p className="mt-8">
            Junte-se a outros estudantes e resolva os desafios para subir no
            nosso ranking de conhecimento.
          </p>
        </section>
      </div>
      <div className="mb-16 text-center">
        <Image src="/banner2.png" alt="interacode" width={600} height={426} />
      </div>
      <Footer />
    </>
  );
};

export default IndexPage;
