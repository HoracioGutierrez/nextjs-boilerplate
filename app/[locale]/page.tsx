import { Button } from "@/components/ui/button";

async function HomePage() {

  return (
    <section className="font-[family-name:var(--font-geist-sans)] grow flex flex-col justify-center">
      <div className="container mx-auto flex flex-col items-center text-center  xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">Quisquam necessita vel
          <span className="text-black/20 dark:text-accent">laborum doloribus</span>delectus
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg max-w-[50ch]">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
        <div className="flex flex-wrap justify-center gap-2">
          <Button variant="outline" size="lg">Get started</Button>
          <Button variant="secondary" size="lg">Learn more</Button>
        </div>
      </div>
    </section>
  );
}

export default HomePage;