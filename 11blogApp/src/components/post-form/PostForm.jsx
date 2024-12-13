import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import Input from "../input";
import RTE from "../RTE";
import Select from "../Select";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }){
    const {register, handleSubmit, watch, control, setValue, getValues} = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.slug || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {}

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
        return value
          .toLowerCase()
          .trim()
          .replace(/[^a-zA-Z\d\s]+/g, "-")
          .replace(/\s/g, "-")
    }, []);

    React.useEffect(() => {
       watch((value, { name }) => {
           if (name === "title") {
               setValue("slug", slugTransform(value.title), {
                   shouldValidate: true,});
           }
       })
    }, [watch, slugTransform, setValue]);

    
}