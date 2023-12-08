import conf from "../conf/conf.js";
import {Client,ID,Databases,Storage,Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appWriteEndpoint)
            .setProject(conf.appWriteProjectID)
        ;
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appWriteDataBaseID,
                conf.appWriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                    // createdAt: new Date().getTime(),
                    // updatedAt: new Date().getTime(),
                }
            );
        } catch (e) {
            throw e
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appWriteDataBaseID,
                conf.appWriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                    // createdAt: new Date().getTime(),
                    // updatedAt: new Date().getTime(),
                }
            );
        } catch (e) {
            throw e
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appWriteDataBaseID,
                conf.appWriteCollectionID,
                slug
            );
            return true
        } catch (e) {
            throw e
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appWriteDataBaseID,
                conf.appWriteCollectionID,
                slug
            );
        } catch (e) {
            throw e
        }
    }

    async getPosts(
        queries = [
            Query.equal("status", 'active')
        ]
    ){
        try {
            return await this.databases.listDocuments(
                conf.appWriteDataBaseID,
                conf.appWriteCollectionID,
                queries
            );
        } catch (e) {
            throw e
        }
    }

    // file Upload Service
    async uploadFile(file){
        try {
             await this.bucket.createFile(
                conf.appWriteBucketID,
                ID.unique(),
                file
            );
             return true
        } catch (e) {
            throw e
        }
    }

    // file Delete Service
    async deleteFile(fileId){
        try {
             await this.bucket.deleteFile(
                conf.appWriteBucketID,
                fileId
            );
             return true
        } catch (e) {
            throw e
        }
    }

    // file preview Service
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucketID,
            fileId
        );
    }


}

const service = new Service();

export default service;