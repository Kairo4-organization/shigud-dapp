# GetHealth200ResponseDataSolana


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connected** | **bool** |  | [optional] 
**cluster** | **str** |  | [optional] 
**slot** | **int** |  | [optional] 
**latency_ms** | **int** |  | [optional] 

## Example

```python
from sipher_client.models.get_health200_response_data_solana import GetHealth200ResponseDataSolana

# TODO update the JSON string below
json = "{}"
# create an instance of GetHealth200ResponseDataSolana from a JSON string
get_health200_response_data_solana_instance = GetHealth200ResponseDataSolana.from_json(json)
# print the JSON string representation of the object
print(GetHealth200ResponseDataSolana.to_json())

# convert the object into a dict
get_health200_response_data_solana_dict = get_health200_response_data_solana_instance.to_dict()
# create an instance of GetHealth200ResponseDataSolana from a dict
get_health200_response_data_solana_from_dict = GetHealth200ResponseDataSolana.from_dict(get_health200_response_data_solana_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


