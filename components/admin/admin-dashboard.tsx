                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        "use client"

import { useState, useEffect } from "react"
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Trash2, Plus, Image as ImageIcon } from "lucide-react"

interface ContentItem {
  id: string
  title: string
  subtitle?: string // Date or location
  description: string
  imageUrl: string
  createdAt: any
}

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("events")
  const [items, setItems] = useState<ContentItem[]>([])
  const [loading, setLoading] = useState(true)

  // Form State
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    imageUrl: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetchItems()
  }, [activeTab])

  const fetchItems = async () => {
    setLoading(true)
    try {
      const q = query(collection(db, activeTab), orderBy("createdAt", "desc"))
      const querySnapshot = await getDocs(q)
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ContentItem[]
      setItems(data)
    } catch (error) {
      console.error("Error fetching items:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, imageUrl: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      if (!db) throw new Error("Firebase not initialized")
      
      await addDoc(collection(db, activeTab), {
        ...formData,
        createdAt: new Date()
      })
      
      alert(`${activeTab === 'events' ? 'Event' : 'Adventure'} added successfully!`)
      setFormData({ title: "", subtitle: "", description: "", imageUrl: "" })
      fetchItems() // Refresh list
    } catch (error) {
      console.error("Error adding document: ", error)
      alert("Failed to add item.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this item?")) {
      try {
        await deleteDoc(doc(db, activeTab, id))
        setItems(items.filter(item => item.id !== id))
      } catch (error) {
        console.error("Error deleting document: ", error)
        alert("Failed to delete item.")
      }
    }
  }

  return (
    <Tabs defaultValue="events" onValueChange={(val: string) => { setActiveTab(val); setFormData({ title: "", subtitle: "", description: "", imageUrl: "" }); }}>
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="events" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Manage Events</TabsTrigger>
        <TabsTrigger value="adventures" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Manage Adventures</TabsTrigger>
      </TabsList>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Add New Item Form */}
        <Card>
          <CardHeader>
            <CardTitle>Add New {activeTab === 'events' ? 'Event' : 'Adventure'}</CardTitle>
            <CardDescription>Create a new item with a Base64 image.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input 
                  id="title" 
                  value={formData.title} 
                  onChange={(e) => setFormData({...formData, title: e.target.value})} 
                  placeholder={activeTab === 'events' ? "e.g. Winter Expedition" : "e.g. Kashmir Great Lakes"}
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subtitle">{activeTab === 'events' ? 'Date' : 'Location/Duration'}</Label>
                <Input 
                  id="subtitle" 
                  value={formData.subtitle} 
                  onChange={(e) => setFormData({...formData, subtitle: e.target.value})} 
                  placeholder={activeTab === 'events' ? "e.g. Dec 25, 2024" : "e.g. Sonamarg, 7 Days"}
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  value={formData.description} 
                  onChange={(e) => setFormData({...formData, description: e.target.value})} 
                  placeholder="Detailed description..."
                  required 
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Banner Image</Label>
                <div className="flex items-center gap-4">
                  <Input 
                    id="image" 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange}
                    required={!formData.imageUrl} // Required if no image selected yet
                    className="cursor-pointer"
                  />
                </div>
                {formData.imageUrl && (
                  <div className="mt-2 relative h-32 w-full rounded-md overflow-hidden bg-gray-100 border">
                    <img src={formData.imageUrl} alt="Preview" className="h-full w-full object-cover" />
                  </div>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Saving..."
                ) : (
                  <>
                    <Plus className="mr-2 h-4 w-4" /> Add {activeTab === 'events' ? 'Event' : 'Adventure'}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* List Existing Items */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Existing {activeTab === 'events' ? 'Events' : 'Adventures'}</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-4">Loading...</div>
            ) : items.length === 0 ? (
              <div className="text-center text-muted-foreground py-8">No items found. Add one to see it here.</div>
            ) : (
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border rounded-lg bg-card hover:bg-accent/50 transition-colors">
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={item.title} className="h-20 w-20 rounded-md object-cover bg-gray-100" />
                    ) : (
                      <div className="h-20 w-20 rounded-md bg-gray-100 flex items-center justify-center">
                        <ImageIcon className="h-8 w-8 text-gray-400" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold truncate">{item.title}</h4>
                      <p className="text-xs text-muted-foreground truncate">{item.subtitle}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{item.description}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-destructive hover:text-destructive/90 hover:bg-destructive/10 shrink-0"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Tabs>
  )
}
