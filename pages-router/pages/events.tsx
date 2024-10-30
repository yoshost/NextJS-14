import { useRouter } from "next/router";
import { useState } from "react";

export default function Events({ events }: any) {
  const [eventsList, setEventsList] = useState(events);
  const router = useRouter();

  const categoryHandler = async () => {
    const response = await fetch(
      "http://localhost:3001/events?category=Entertainment"
    );
    const data = await response.json();
    setEventsList(data);
    router.push("/events?category=Entertainment", undefined, { shallow: true });
  };

  return (
    <>
      <h1>Events</h1>
      <button onClick={categoryHandler}>Enterainment</button>
      <div>
        {eventsList.map((event: any) => (
          <p key={event.id}>
            {" "}
            {event.id} || {event.title} || {event.category} ||{" "}
            {event.description}
          </p>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { query } = context;
  const { category } = query;
  const queryParams = category ? `?category=${category}` : "";
  const response = await fetch(`http://localhost:3001/events${queryParams}`);
  const data = await response.json();

  return {
    props: {
      events: data,
    },
  };
}
