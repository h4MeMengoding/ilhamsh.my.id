interface Track {
  id: string;
  name: string;
  artists: Array<{ name: string; href: string }>;
  href: string;
  albumArt: { url: string };
  playlistName: string;
  playlistHref: string;
  currentlyPlaying: boolean;
}

export const getAccessToken = async (): Promise<string | null> => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("client_id", process.env.SPOTIFY_CLIENT_ID as string);
  urlencoded.append("client_secret", process.env.SPOTIFY_CLIENT_SECRET as string);
  urlencoded.append("grant_type", "refresh_token");
  urlencoded.append("refresh_token", process.env.SPOTIFY_REFRESH_TOKEN as string);

  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    next: { revalidate: 3600 } as any, // 'any' is used because 'next' is not a standard property of RequestInit
  };

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", requestOptions);
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getCurrentTrack = async (accessToken: string): Promise<any | null> => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 0 } as any, // 'any' is used because 'next' is not a standard property of RequestInit
  };

  try {
    const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", requestOptions);
    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
};

export const getLastPlayedTrack = async (accessToken: string): Promise<any | null> => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 60 } as any, // 'any' is used because 'next' is not a standard property of RequestInit
  };

  try {
    const response = await fetch("https://api.spotify.com/v1/me/player/recently-played", requestOptions);
    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
};

export const getTrack = async (accessToken: string, id: string): Promise<any | null> => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 60 } as any, // 'any' is used because 'next' is not a standard property of RequestInit
  };

  try {
    const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, requestOptions);
    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
};

export const getTopTracks = async (accessToken: string): Promise<any | null> => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 60 } as any, // 'any' is used because 'next' is not a standard property of RequestInit
  };

  try {
    const response = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=5", requestOptions);
    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
};

export const getPlaylist = async (accessToken: string, playlist_id: string): Promise<any | null> => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 60 } as any, // 'any' is used because 'next' is not a standard property of RequestInit
  };

  try {
    const response = await fetch(playlist_id, requestOptions);
    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
};

export const getAlbumDetails = async (accessToken: string, album_id: string): Promise<any | null> => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    next: { revalidate: 60 } as any, // 'any' is used because 'next' is not a standard property of RequestInit
  };

  try {
    const response = await fetch(album_id, requestOptions);
    const data = await response.json();
    return data ? data : null;
  } catch (err) {
    return null;
  }
};
