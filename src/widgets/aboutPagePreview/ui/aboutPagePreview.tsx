import { Avatar } from "@/src/widgets/avatar"

export const AboutPagePrewiev = () => {
  return (
    <div className="grid md:grid-flow-col xl:grid-cols-[75%_30%] md:grid-cols-[60%_40%] grid-flow-row items-center justify-center h-96 lg:px-24 md:px-10 px-4 gap-12 mt-10 lg:gap-2 ">
      <p className="text-balance text-center text-sm lg:text-base">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae ratione quam ut
        corrupti reprehenderit tempora, minima tenetur doloremque, animi ad distinctio
        error veritatis sapiente corporis deleniti quo quis temporibus id! Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Similique aspernatur autem quae
        neque, provident aliquid, dolores debitis culpa architecto quia, sapiente tempora
        suscipit perspiciatis optio obcaecati maxime aperiam modi cumque. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Itaque maiores obcaecati odio officia
        laborum fuga iusto beatae culpa nulla error. Porro ullam dolorem consequatur
        exercitationem sunt soluta nulla eligendi minima!
      </p>
      <div className="row-start-1 row-end-2 ">
        <Avatar />
      </div>
    </div>
  )
}
