import Tilt from "react-parallax-tilt";
import Link from "next/link";
import { GoGoal } from "react-icons/go";

import { Container } from "./container";

import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="relative">
        <Container>
          <h3 className="text-2xl text-center font-bold text-green-900 dark:text-white md:text-3xl lg:text-4xl">
          Meet Your GitHub Heroes - GeeksInk
          </h3>

          <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title="Simplified"
              icon={<Image src="/git.svg" alt="hero" width={100} height={100} />}
              description={
                <>
                  GeeksInk offers intuitive tools to manage your repositories with ease. Simplify your workflow with ease.
                </>
              }
            />
            <Card
              title="Effortless"
              icon={<Image src="/repo.svg" alt="hero" width={100} height={100} />}
              description={
                <>
                  Tired of juggling numerous issues? GeeksInk comes to your rescue with automated issue management capabilities
                </>
              }
            />
            <Card
              title="Personalized"
              icon={<Image src="/soure.svg" alt="hero" width={100} height={100} />}
              description={
                <>
                  Enhance your team's camaraderie with personalized user greetings. GeeksInk adds a touch of warmth to your GitHub environment 
                </>
              }
            />
          </div>
        </Container>
      </div>
    </>
  );
}

function GraphicWrapper({
  children,
  onClick,
}: {
  children: JSX.Element;
  onClick: () => void;
}) {
  return (
    <Tilt
      tiltMaxAngleX={5}
      tiltMaxAngleY={10}
      glareEnable
      tiltAngleYInitial={0}
      glareMaxOpacity={0.1}
      className="fix-safari-tilt shadow-lg w-full
rounded-lg text-center bg-gradient-to-b from-green-200 to-white dark:from-green-700 dark:via-green-800 dark:to-darker p-px"
    >
      <div className="absolute z-50 flex p-2 justify-end w-full">
        <button onClick={onClick} aria-label="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute hover:animate-spin"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 animate-ping text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </div>
      {children}
    </Tilt>
  );
}

function Card({ title, description, icon }: any) {
  return (
    <Tilt
      tiltMaxAngleX={2.5}
      tiltMaxAngleY={5}
      glareEnable
      tiltAngleYInitial={0}
      glareMaxOpacity={0.1}
      className="fix-safari-tilt relative overflow-hidden rounded-2xl bg-gradient-to-b from-green-200 to-white p-px dark:from-green-700 dark:via-green-800 dark:to-darker"
    >
      <div className="relative flex h-full flex-col gap-6 rounded-2xl bg-green-100 p-8 dark:bg-green-900">
        <div className="flex items-center justify-center">{icon}</div>

        <div>
          <h4 className="text-xl font-semibold text-green-900 dark:text-white">
            {title}
          </h4>
          <p className="mt-3 text-black/90 dark:text-gray-600">{description}</p>
        </div>
      </div>
    </Tilt>
  );
}




