> Rise vest React native test by ANDREW SAMUEL.  

> Important keys to note
- "Project": This project was created using react native expo, react navigation 5 and redux toolkit
- "Build": I Used eas build to bundle the apk
- "FONT": I couldn't find the font on the figma file since it's paid so i defaulted to the free one on google
> Typings and incompatibilities

This project uses the new expo sdk 49, and for that reason we have access to use the .env files, because we are using the new sdk 49 and the required navigation version was navigation 5, 
certain fields are not properly typed well, and react navigation throws a status bar error on navigation.navigate from the simulator on ios. Tokens were not persisted across builds so that the full ap can be tested.
