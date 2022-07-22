import Header from "src/components/Header/Header"
import Footer from "src/components/Footer/Footer"

type MainLayoutProps = {
  children?: React.ReactNode
  style?: React.CSSProperties
  headerClassNames?: string
}

const MainLayout = ({ children, style, headerClassNames }: MainLayoutProps) => {

  return (
    <div
      style={{...style}}
    >
      <Header className={headerClassNames}/>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout

