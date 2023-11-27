 export const searchDefinitions = async (setDefinitions, wordsList) => {
    try {
      const newDefinitions = [];
      for (const word of wordsList) {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );

        if (response.ok) {
          const data = await response.json();

          if (data.length > 0) {
            const firstDefinition = data[0].meanings[0].definitions[0].definition;
            newDefinitions.push(firstDefinition);
          }
        } else {
          console.log(
            "Error in the request:",
            response.status,
            response.statusText
          );
        }
      }
      setDefinitions(newDefinitions);
    } catch (error) {
      console.log("Error in the request:", error);
    }
  };