---
title: "Implementing a Route Progress Bar in a Next.js and Tailwind CSS App"
plum: true
year: 2022
day: 30
date: 30 Dec, 2022
---

HEY 👋, Welcome to this tutorial on adding a route progress bar to a Next.js and Tailwind CSS app! A route progress bar is a visual indicator that displays the progress of a user's journey as they navigate through an app or website. This can be a useful tool for enhancing the user experience and providing feedback to users on their progress.

In this tutorial, we will be using Next.js, a popular framework for building server-rendered React applications, and Tailwind CSS, a utility-first CSS framework. We will walk through the steps of implementing a route progress bar in a Next.js app and styling it with Tailwind CSS.

Whether you are new to Next.js and Tailwind CSS or have some experience with these technologies, this tutorial will provide you with the knowledge and skills you need to add a route progress bar to your own projects. Let's get started!

## Next js and tailwind CSS setup

I am using Tailwind css as a flavour of css to style my Next js to setup Next js with Tailwind css you can use this [template](https://github.com/vercel/next.js/tree/c3e5caf1109a2eb42801de23fc78e42a08e5da6e/examples/with-tailwindcss)
or use this officail guid from [tailwind css docs](https://tailwindcss.com/docs/guides/nextjs)

## NProgress

to help with the loading bar logic you'll be using a package called NProgress because it makes it easier to style components with Tailwind CSS class names.
to install run `yarn add react-nprogress`

## Bar component

Now that we have setup out of the way we can start working on our actual componets here
so create a `Componets` directory and create a file `bar.tsx` and add this code into that `bar.tsx` file

```js
interface Props {
  animationDuration: number;
  progress: number;
}

export const Bar = ({ animationDuration, progress }: Props) => (
  <div
    className="bg-brand fixed left-0 top-0 z-50 h-1 w-full"
    style={{
      marginLeft: `${(-1 + progress) * 100}%`,
      transition: `margin-left ${animationDuration}ms linear`,
    }}
  ></div>
);
```

Props values of `animationDuration` and `Progress` is coming from `react-nprogress`

## Container component

create a new file `container.tsx` and paste this code in the file ..

```js
import { ReactNode } from "react";

interface Props {
  animationDuration: number;
  children: ReactNode;
  isFinished: boolean;
}

export const Container = ({
  animationDuration,
  children,
  isFinished,
}: Props) => (
  <div
    className="pointer-events-none"
    style={{
      opacity: isFinished ? 0 : 1,
      transition: `opacity ${animationDuration}ms linear`,
    }}
  >
    {children}
  </div>
);
```

this is the component that wrap the `bar` componet and handle the logic if the loading is finsihed or not using `isFinished` prop that allow to change opacity of the bar .

## Progress Bar component

Now that we have the `bar` and `container` component out of the way let's finish the Progress Component create a file `index.tsx` add this code .

```js
import { useNProgress } from "@tanem/react-nprogress";
import { Bar } from "./bar";
import { Container } from "./progressContainer";

interface Props {
  isAnimating: boolean;
}

const Progress = ({ isAnimating }: Props) => {
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <Container animationDuration={animationDuration} isFinished={isFinished}>
      <Bar animationDuration={animationDuration} progress={progress} />
    </Container>
  );
};

export default Progress;
```

This component uses `useNProgress` hook from `@tanem/react-nprogress` to get the `animationDuration` , `isFinished`, `progress`.
this takes a `isAnimating` Prop and return all the value and can be used by `Bar` and `Container` Componenet.

## Add Progress Bar

Now let's import the Progress Bar component use in `_app.tsx` file.

```js
import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";

import { Progress } from "/components";

function MyApp({ Component, pageProps }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <>
      <Progress isAnimating={isAnimating} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
```

here we are createing a state `isAnimating` and passing that to `Progress` Component.
and creating function to set that state and run these function bassed on the router events
when changing a route `router` emits events that in useEffect listining and using that to set the state of the progress bar .
in the cleanup function we are reseting the events to pervent some bad behaviour and memory leasks.

## Conclusion

n this tutorial, we learned how to create a simple progress bar with NProgress and how to listen to router events using the useRouter and useEffect hooks.

see you in a next one.
