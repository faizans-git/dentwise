"use client"

import { createDoctor, getDoctors, UpdateDoctor } from "@/lib/actions/doctors"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export  function useGetDoctors() {
    const result = useQuery({
        queryKey: ["getDoctors"],
        queryFn: getDoctors
    })
    return result
}

export function useCreateDoctr() {
    const queryClient = useQueryClient();
    const result = useMutation({
        mutationFn:createDoctor,
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["getDoctors"]})
        } ,
        onError:() => console.log("Error while creatting doc")
    });

    return result
}

export function useUpdateDoctor() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:UpdateDoctor,
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:["getDoctors"]})
        } ,
        onError:() => console.log("Error while creatting doc")
    });

}