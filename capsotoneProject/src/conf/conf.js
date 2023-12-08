const conf = {
    appWriteEndpoint: String(import.meta.env.VITE_APP_WRITE_ENDPOINT),
    appWriteProjectID: String(import.meta.env.VITE_APP_WRITE_PROJECT_ID),
    appWriteCollectionID: String(import.meta.env.VITE_APP_WRITE_COLLECTION_ID),
    appWriteDataBaseID: String(import.meta.env.VITE_APP_WRITE_DATABASE_ID),
    appWriteBucketID: String(import.meta.env.VITE_APP_WRITE_BUCKET_ID),
}

export default conf