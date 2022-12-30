---
title: "Implementing a Route Progress Bar in a Next.js and Tailwind CSS App"
plum: true
year: 2023
day: 1
date: 01 Jan, 2022
---

In this tutorial, we will learn how to create a switch toggle button in a Next.js app using Tailwind CSS. A toggle button is a control that allows the user to switch between two states, such as on and off. The switch toggle button is a variation of the toggle button, where the switch is styled to look like a switch that can be turned on or off.

Creating a toggle button in a Next.js app using Tailwind CSS is a straightforward process. First, we will create a new Next.js project and install Tailwind CSS. Then, we will create a toggle button component that uses React state to track the current state of the toggle button. Finally, we will include the toggle button component in our app and use it to switch between different states.

Throughout this tutorial, we will walk through each step of the process in detail, with code examples to help you follow along. By the end of this tutorial, you will have a working toggle button in your Next.js app that you can customize to fit your needs.

## CODE

```jsx
<label className="relative flex justify-between items-center p-2 text-xl">
  Send 😺 memes to my inbox?
  <input
    type="checkbox"
    className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
  />
  <span className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6"></span>
</label>
```
