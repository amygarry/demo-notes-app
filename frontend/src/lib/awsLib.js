import { Storage } from "aws-amplify";

// It takes a file object as a parameter.

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;
// Generates a unique file name using the current timestamp
//Upload the file to the user’s folder in S3 
  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });

  return stored.key;
}