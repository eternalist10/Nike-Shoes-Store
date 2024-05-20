import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div>
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet numquam
          deserunt, vel dolore labore incidunt. Quo illo, consequatur impedit,
          tempora labore at voluptates quibusdam voluptas, blanditiis doloribus
          et explicabo similique assumenda hic!
        </p>
        <p className="mt-6 lg:max-w-lg info-text font-montserrat">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex impedit
          odio distinctio hic in ut, consequatur quod accusamus ad qui, nesciunt
          quos ratione provident.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
        <p></p>
      </div>
    </section>
  );
};

export default SpecialOffer;
