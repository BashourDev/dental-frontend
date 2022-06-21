import Footer from "../components/Footer";
import AboutUsHero from "../components/heros/AboutUsHero";
import FindDoctorHero from "../components/heros/FindDoctorHero";
import SpecialCentersCarousel from "../components/SpecialCentersCarousel";
import SpecialCompaniesCarousel from "../components/SpecialCompaniesCarousel";

const Home = () => {
  let specialCenters = [
    {
      id: 1,
      name: "great center 1",
      country: "Syria",
      city: "Homs",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      },
    },
    {
      id: 2,
      name: "great center 2",
      country: "Lebanon",
      city: "Sin El-Feil",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      },
    },
    {
      id: 3,
      name: "great center 3",
      country: "Lebanon",
      city: "Sin El-Feil",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      },
    },
    {
      id: 4,
      name: "great center 4",
      country: "Syria",
      city: "Homs",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      },
    },
    {
      id: 5,
      name: "great center 5",
      country: "Syria",
      city: "Homs",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      },
    },
    {
      id: 6,
      name: "great center 6",
      country: "Syria",
      city: "Homs",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      },
    },
    {
      id: 7,
      name: "great center 7",
      country: "Syria",
      city: "Homs",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      },
    },
    {
      id: 8,
      name: "great center 8",
      country: "Syria",
      city: "Homs",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      },
    },
    {
      id: 9,
      name: "great center 9",
      country: "Lebanon",
      city: "Sin El-Feil",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      },
    },
    {
      id: 10,
      name: "great center 10",
      country: "Lebanon",
      city: "Sin El-Feil",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      },
    },
  ];

  let specialCompanies = [
    {
      id: 1,
      name: "great company 1",
      country: "Syria",
      city: "Homs",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      },
    },
    {
      id: 2,
      name: "great company 2",
      country: "Lebanon",
      city: "Sin El-Feil",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      },
    },
    {
      id: 3,
      name: "great company 3",
      country: "Lebanon",
      city: "Sin El-Feil",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      },
    },
    {
      id: 4,
      name: "great company 4",
      country: "Syria",
      city: "Homs",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      },
    },
    {
      id: 5,
      name: "great company 5",
      country: "Syria",
      city: "Homs",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      },
    },
    {
      id: 6,
      name: "great company 6",
      country: "Syria",
      city: "Homs",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      },
    },
    {
      id: 7,
      name: "great company 7",
      country: "Syria",
      city: "Homs",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      },
    },
    {
      id: 8,
      name: "great company 8",
      country: "Syria",
      city: "Homs",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://media.istockphoto.com/photos/young-happy-woman-during-dental-procedure-at-dentists-office-picture-id1349328691?b=1&k=20&m=1349328691&s=170667a&w=0&h=NsFILWeIeZYboZnGu2vT3Ni408nyahznmyoV7V6gGl8=",
      },
    },
    {
      id: 9,
      name: "great company 9",
      country: "Lebanon",
      city: "Sin El-Feil",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      },
    },
    {
      id: 10,
      name: "great company 10",
      country: "Lebanon",
      city: "Sin El-Feil",
      address: "main street",
      first_media_only: {
        name: "blah",
        original_url:
          "https://www.openaccessgovernment.org/wp-content/uploads/2020/12/dreamstime_l_55863002.jpg",
      },
    },
  ];
  return (
    <div>
      <FindDoctorHero />
      <AboutUsHero
        title={"About Us"}
        subtitle={"Learn More About Who We Are"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas temporibus reiciendis voluptatem rem quam animi, repellat, quisquam ab ducimus dolorum similique quibusdam fugit nulla placeat eaque ipsum ullam dolores doloremque?"
        }
      />
      <div className="max-w-7xl w-screen mx-auto  py-5 space-y-10 overflow-x-hidden">
        <SpecialCompaniesCarousel
          title={"Special Companies"}
          subtitle={"Check Out Our Selective Special Companies"}
          companies={specialCompanies}
        />
      </div>
      <div className="max-w-7xl w-screen mx-auto  py-5 space-y-10 overflow-x-hidden">
        <SpecialCentersCarousel
          title={"Special Centers"}
          subtitle={"Check Out Our Selective Special Centers"}
          centers={specialCenters}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
