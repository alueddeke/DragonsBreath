import { Hero, Button } from "my-frontend-lib";

function HeroDragon() {
  return (
    <Hero
      title="Welcome to Dragon's Breath"
      subtitle="Transcribe your media instantly"
      className="bg-light min-h-screen text-dark"
    >
      <Button
        size="lg"
        className="bg-primary text-white px-20 py-5 hover:bg-secondary transition-colors duration-300"
      >
        Choose file
      </Button>
    </Hero>
  );
}

export default HeroDragon;
