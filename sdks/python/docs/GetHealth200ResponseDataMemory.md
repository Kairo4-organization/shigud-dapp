# GetHealth200ResponseDataMemory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**heap_used_mb** | **float** |  | [optional] 
**rss_mb** | **float** |  | [optional] 

## Example

```python
from sipher_client.models.get_health200_response_data_memory import GetHealth200ResponseDataMemory

# TODO update the JSON string below
json = "{}"
# create an instance of GetHealth200ResponseDataMemory from a JSON string
get_health200_response_data_memory_instance = GetHealth200ResponseDataMemory.from_json(json)
# print the JSON string representation of the object
print(GetHealth200ResponseDataMemory.to_json())

# convert the object into a dict
get_health200_response_data_memory_dict = get_health200_response_data_memory_instance.to_dict()
# create an instance of GetHealth200ResponseDataMemory from a dict
get_health200_response_data_memory_from_dict = GetHealth200ResponseDataMemory.from_dict(get_health200_response_data_memory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


