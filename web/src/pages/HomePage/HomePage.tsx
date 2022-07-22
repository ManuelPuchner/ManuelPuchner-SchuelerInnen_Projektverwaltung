import { MetaTags } from '@redwoodjs/web'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

const HomePage = () => {
  const bgImages = [
    'ian-dooley-DJ7bWa-Gwks-unsplash.jpg',
    'nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg',
    'mche-lee-PC91Jm1DlWA-unsplash.jpg',
    'avel-chuklanov-DUmFLtMeAbQ-unsplash.jpg',
  ]

  const bgImagesMap = bgImages.map((bgImage) => {
    return {
      src: `/bg/${bgImage}`,
      canBeUsed: true,
    }
  });

  const getRandomBgImage = () => {
    const randomIndex = Math.floor(Math.random() * bgImagesMap.length);
    if(!bgImagesMap.some((bgImage) => bgImage.canBeUsed)) {
      bgImagesMap.forEach((bgImage) => {
        bgImage.canBeUsed = true;
      })
    }

    if(bgImagesMap[randomIndex].canBeUsed) {
      bgImagesMap[randomIndex].canBeUsed = false;
      return bgImagesMap[randomIndex].src;
    } else {
      return getRandomBgImage();
    }
  }


  return (
    <MainLayout>
      <MetaTags title="Home" description="Home page" />

      <section
        className="relative flex flex-col min-h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient( rgba(50 50 50 / 0.7), rgba(50 50 50 / 0.7)), url('${getRandomBgImage()}')`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="-scale-x-100 absolute bottom-0"
        >
          <path
            fillOpacity="1"
            className="fill-prim-red"
            d="M0,224L48,234.7C96,245,192,267,288,234.7C384,203,480,117,576,106.7C672,96,768,160,864,165.3C960,171,1056,117,1152,117.3C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>

      <section
        className="relative flex flex-col min-h-screen bg-cover bg-center bg-fixed overflow-hidden"
        style={{
          backgroundImage: `linear-gradient( rgba(50 50 50 / 0.7), rgba(50 50 50 / 0.7)), url('${getRandomBgImage()}')`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute"
        >
          <path
            fillOpacity="1"
            className="fill-prim-red"
            d="M0,288L48,240C96,192,192,96,288,85.3C384,75,480,149,576,165.3C672,181,768,139,864,122.7C960,107,1056,117,1152,101.3C1248,85,1344,43,1392,21.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="scale-x-75 -left-full absolute h-full"
        >
          <path
            fillOpacity="1"
            className="fill-prim-orange"
            d="M0,224L48,234.7C96,245,192,267,288,234.7C384,203,480,117,576,106.7C672,96,768,160,864,165.3C960,171,1056,117,1152,117.3C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
    </MainLayout>
  )
}

export default HomePage
