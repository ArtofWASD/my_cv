import Image from "next/image"

const ThemeSwitcherIcon = ({ theme }: { theme: string }) => {
  return (
    <div>
          <Image
            src={`/icons/${theme}.png`}
            width={40}
            height={40}
            alt="Picture of the author"
            className="cursor-pointer hover:scale-120"
          />
    </div>
  )
}

export default ThemeSwitcherIcon
