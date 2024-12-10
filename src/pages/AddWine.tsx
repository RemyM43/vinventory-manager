import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload } from "lucide-react";
import { Wine } from "@/lib/types";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const AddWine = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<Wine>({
    defaultValues: {
      type: 'red',
      quantity: 1,
      year: new Date().getFullYear(),
      purchaseDate: new Date().toISOString().split('T')[0],
      optimalDate: new Date().toISOString().split('T')[0],
    }
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        toast({
          title: "Erreur",
          description: "L'image ne doit pas dépasser 5MB",
          variant: "destructive",
        });
        return;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: Wine) => {
    console.log({ ...data, image: imagePreview });
    toast({
      title: "Vin ajouté",
      description: "Le vin a été ajouté à votre collection",
    });
    navigate('/');
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
            <input
              type="file"
              id="wine-label"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <label htmlFor="wine-label">
              {imagePreview ? (
                <div className="relative mx-auto w-48 h-48 cursor-pointer">
                  <img
                    src={imagePreview}
                    alt="Aperçu de l'étiquette"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm">Changer l'image</p>
                  </div>
                </div>
              ) : (
                <Button variant="outline" className="mx-auto">
                  <Upload className="mr-2 h-4 w-4" />
                  Importer une étiquette
                </Button>
              )}
            </label>
            <p className="mt-2 text-sm text-muted-foreground">
              Formats acceptés : JPG, PNG (max 5MB)
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
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type de vin</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="red">Rouge</SelectItem>
                          <SelectItem value="white">Blanc</SelectItem>
                          <SelectItem value="rose">Rosé</SelectItem>
                          <SelectItem value="sparkling">Pétillant</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Millésime</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} min={1900} max={new Date().getFullYear()} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="region"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Région</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Bordeaux" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantité</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} min={1} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prix (€)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} min={0} step={0.01} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="purchaseDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date d'achat</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="optimalDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date optimale de dégustation</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        placeholder="Notes sur le vin, le millésime, etc."
                        className="min-h-[100px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
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