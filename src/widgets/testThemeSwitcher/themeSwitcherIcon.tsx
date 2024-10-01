import Image from "next/image"

const ThemeSwitcherIcon = ({ theme }: { theme: string }) => {
  return (
    <div>
          <Image
            src={`/icons/${theme}.png`}
            width={30}
            height={30}
            alt="Picture of the author"
            className="cursor-pointer hover:scale-110"
          />
    </div>
  )
}

export default ThemeSwitcherIcon
