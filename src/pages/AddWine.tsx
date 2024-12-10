import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";
import { Wine } from "@/lib/types";

const AddWine = () => {
  const navigate = useNavigate();
  const form = useForm<Wine>();

  const onSubmit = (data: Wine) => {
    console.log(data);
    // TODO: Implement wine addition logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-gold-light p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <Button 
          variant="ghost" 
          className="text-wine hover:text-wine-dark"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>

        <div className="bg-white/50 backdrop-blur rounded-lg p-6 space-y-6">
          <h1 className="text-3xl font-playfair font-bold text-wine">Ajouter un vin</h1>

          <div className="border-2 border-dashed border-wine/20 rounded-lg p-8 text-center">
            <Button variant="outline" className="mx-auto">
              <Upload className="mr-2 h-4 w-4" />
              Importer une étiquette
            </Button>
            <p className="mt-2 text-sm text-muted-foreground">
              Formats acceptés : JPG, PNG
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom du vin</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Château Margaux" />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              {/* TODO: Add other wine fields */}
              
              <Button type="submit" className="w-full bg-wine hover:bg-wine-dark">
                Sauvegarder
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddWine;