import React from "react";
import { useQuery } from "@apollo/client"; // allows for the querying of apollo/mongoDB data
import { QUERY_THOUGHTS } from "../utils/queries";
import ThoughtList from "../components/ThoughtList";

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS); // returns loading status and the actual data
  const thoughts = data?.thoughts || []; // checks if the data exists (if it has been returned yet), if so, then retrieve data.thoughts and store in a variable
  console.log(thoughts);

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
