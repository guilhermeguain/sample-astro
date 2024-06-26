import type { FetchGraphQlProps } from "./types";

/**
 * Fetches data from the Strapi API using GraphQL
 * @param query - The GraphQL query to fetch data
 * @returns Promise<unknown>
 */
export async function fetchGraphQL<T>({
  query,
  wrappedByKey,
  wrappedByList,
}: FetchGraphQlProps): Promise<T | undefined> {
  const strapiUrl = import.meta.env.PUBLIC_STRAPI_URL;

  if (!strapiUrl) return undefined;

  const url = new URL(`${strapiUrl}/graphql`);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    });

    let data = await response.json();

    if (wrappedByKey) {
      data = data[wrappedByKey];
    }

    if (wrappedByList) {
      data = data[0];
    }

    return data as T;
  } catch (error) {
    console.log(error, "fetchGraphQL error");
  }
}
