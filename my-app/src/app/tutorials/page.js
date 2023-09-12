import Card from "../components/Cards";
import client from "../sanity/Client";

const Tutorials = async () => {
  const res = await client.fetch(`*[_type == "tutorials"]`);
console.log(res);
    return (
       <section className="text-gray-600 body-font">
  <div className="container px-5 py-4 mx-auto">
  <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-center text-gray-900">
    Blog Page
   
    </h1>
    <div class="h-1 w-20 bg-indigo-500 mx-auto rounded"></div>
    <div className="flex flex-wrap -m-4 mt-10">
    {
    res.map(val =>{
      return(
        <Card 
        views={val.views} 
        comments={val.comments} 
        description={val.description} 
        title={val.title} 
        img={val.image} 
        />
      )
    })
    }
      
      {/* <Card />
      <Card /> */}
    </div>
  </div>
</section>

    )
}

export default Tutorials;