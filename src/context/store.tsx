// "use client";

// import {
//   createContext,
//   useContext,
//   Dispatch,
//   SetStateAction,
//   useState,
//   ReactNode,
// } from "react";

// // Define the interface for the music item
// interface MusicItem {
//   id: number;
//   category: string;
//   tag: string;
//   source: string;
//   imageUrl: string;
//   title: string;
//   artist: string;
// }

// // Define the context properties
// interface ContextProps {
//   selectedMusicItem: MusicItem | null;
//   setSelectedMusicItem: Dispatch<SetStateAction<MusicItem | null>>;
// }

// // Create the context with default values
// const GlobalContext = createContext<ContextProps>({
//   selectedMusicItem: null, // Initially, no music item is selected
//   setSelectedMusicItem: (): MusicItem | null => null,
// });

// // Create a provider component to wrap around your app
// export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
//   const [selectedMusicItem, setSelectedMusicItem] = useState<MusicItem | null>(null);

//   return (
//     <GlobalContext.Provider value={{ selectedMusicItem, setSelectedMusicItem }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// // Hook to use the global context in your components
// export const useGlobalContext = () => useContext(GlobalContext);
