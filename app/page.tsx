import { Desktop } from "@/components/desktop";
import { PageWithThemeMode } from "@/components/page-with-theme-mode";
import { Raycast } from "@/components/raycast";
import { Theme, colorOrder, getAllThemes } from "@/lib/theme";
import { BASE_URL } from "@/lib/url";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  if (searchParams) {
    const appearance = searchParams.appearance as "light" | "dark";
    const name = searchParams.name as string;
    const author = searchParams.author as string;
    const authorUsername = searchParams.authorUsername as string;
    const version = searchParams.version as string;

    const colorsArray = [
      searchParams.background,
      searchParams.backgroundSecondary,
      searchParams.text,
      searchParams.selection,
      searchParams.loader,
      searchParams.red,
      searchParams.orange,
      searchParams.yellow,
      searchParams.green,
      searchParams.blue,
      searchParams.purple,
      searchParams.magenta,
    ];

    const isValidTheme =
      Boolean(appearance) &&
      Boolean(name) &&
      Boolean(author) &&
      Boolean(version) &&
      Boolean(authorUsername) &&
      Boolean(colorsArray);

    if (!isValidTheme) {
      return;
    }

    const queryParams = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) =>
      queryParams.set(key, value)
    );

    const title = `${name} by ${author}`;
    const image = `${BASE_URL}/og?${queryParams}`;

    return {
      title,
      openGraph: {
        title,
        images: [
          {
            url: image,
          },
        ],
      },
    };
  }

  return {};
}

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const themes = await getAllThemes();
  const defaultTheme = themes.filter((theme) => theme.appearance === "dark")[0];

  let themeInUrl: Theme | undefined = undefined;
  if (searchParams) {
    const appearance = searchParams.appearance as "light" | "dark";
    const name = searchParams.name as string;
    const author = searchParams.author as string;
    const authorUsername = searchParams.authorUsername as string;
    const version = searchParams.version as string;

    const colorsArray = [
      searchParams.background,
      searchParams.backgroundSecondary,
      searchParams.text,
      searchParams.selection,
      searchParams.loader,
      searchParams.red,
      searchParams.orange,
      searchParams.yellow,
      searchParams.green,
      searchParams.blue,
      searchParams.purple,
      searchParams.magenta,
    ];

    const isValidTheme =
      appearance && name && author && version && authorUsername && colorsArray;

    if (!isValidTheme) {
      themeInUrl = undefined;
      return;
    }

    const colors = colorOrder.reduce((acc: any, color) => {
      acc[color] = colorsArray[colorOrder.indexOf(color)];
      return acc;
    }, {});

    themeInUrl = {
      appearance,
      name,
      version,
      author,
      authorUsername,
      colors,
    };
  }

  return (
    <PageWithThemeMode theme={themeInUrl || defaultTheme}>
      <Desktop>
        <Raycast />
      </Desktop>
    </PageWithThemeMode>
  );
}
