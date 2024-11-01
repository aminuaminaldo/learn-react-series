import conf from "../conf/conf";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.appWriteURL)
      .setProject(conf.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getPost(slug) {
    try {
      const result = await this.databases.getDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
      return result;
    } catch (error) {
      console.log("Appwrite service :: getPost() :: ", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      const result = await this.databases.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        queries
      );
      return result;
    } catch (error) {
      console.log("Appwrite service :: getPosts() :: ", error);
      return false;
    }
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      const result = await this.databases.createDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
      return result;
    } catch (error) {
      console.log("Appwrite service :: createPost() :: ", error);
      return false;
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      const result = await this.databases.updateDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
      return result;
    } catch (error) {
      console.log("Appwrite service :: updatePost() :: ", error);
      return false;
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletePost() :: ", error);
      return false;
    }
  }

  // storage Service
  async uploadFile(file) {
    try {
      const result = await this.bucket.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        file
      );
      return result;
    } catch (error) {
      console.log("Appwrite service :: uploadFile() :: ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appWriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile() :: ", error);
      return false;
    }
  }
  getFilePreview(fileId) {
    try {
      const result = this.bucket.getFilePreview(
        conf.appWriteBucketId,
        fileId
      ).href;
      return result;
    } catch (error) {
      console.log("Appwrite service :: getFilePreview() :: ", error);
      return false;
    }
  }
}

const service = new Service();
export default service;
