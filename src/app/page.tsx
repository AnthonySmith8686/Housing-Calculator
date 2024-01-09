import { Fragment } from "react";


export default function Home() {
  return (
    <Fragment>
    <main className="flex flex-col items-center justify-between p-24 bg-red-500 w-96 h-96">
      Hello!
    </main>
    <iframe src="https://housing-calculator.vercel.app/" width="300" height="400" title="Calculator App"></iframe>
    </Fragment>
  )
}
